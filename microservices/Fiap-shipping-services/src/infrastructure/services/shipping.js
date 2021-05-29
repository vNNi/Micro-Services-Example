import config from "config";
import ShippingLib from "node-correios";

const getEstimate = async ({ zipCode, product = {} } = {}) => {
  const defaultOrigin = config.get("shipping.defaultOrigin");
  const defaultService = config.get("shipping.defaultService");
  const defaultFormat = config.get("shipping.defaultFormat");

  const args = {
    nCdServico: defaultService,
    sCepOrigin: defaultOrigin,
    sCepDestino: zipCode,
    nVlPeso: product.weight,
    nCdFormato: defaultFormat,
    nVlComprimento: product.length,
    nVlAltura: product.height,
    nVlLargura: product.width,
    nVlDiametro: product.depth,
  };
  const response = await new ShippingLib().calcPreco(args);
  return response;
};

const Service = Object.freeze({ estimate: getEstimate });

export default Service;
