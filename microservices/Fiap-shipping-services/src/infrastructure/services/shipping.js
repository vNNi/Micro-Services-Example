import config from "config";
import freightLib from "correios-brasil";
import CircuitBreaker from "opossum";

import fallback from "./fallbacks/estimate.js";

const getEstimate = async ({ zipCode, product = {} } = {}) => {
  const defaultOrigin = config.get("shipping.defaultOrigin");
  const defaultService = config.get("shipping.defaultService");
  const defaultFormat = config.get("shipping.defaultFormat");

  const { calcularPrecoPrazo } = freightLib;

  const args = {
    nCdServico: [defaultService],
    sCepOrigem: defaultOrigin,
    sCepDestino: zipCode,
    nVlPeso: product.weight,
    nCdFormato: defaultFormat,
    nVlComprimento: product.length,
    nVlAltura: product.height,
    nVlLargura: product.width,
    nVlDiametro: product.depth,
  };

  const breaker = new CircuitBreaker(calcularPrecoPrazo, {
    timeout: Number(config.get("shipping.circuit.timeout")),
    errorThresholdPercentage: Number(
      config.get("shipping.circuit.errorThresholdPercentage")
    ),
    resetTimeout: Number(config.get("shipping.circuit.resetTimeout")),
  });

  breaker.fallback(() => fallback);
  const response = await breaker.fire(args);

  return response;
};

const Service = Object.freeze({ estimate: getEstimate });

export default Service;
