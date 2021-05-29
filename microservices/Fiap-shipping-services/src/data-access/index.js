import ShippingService from "../infrastructure/services/shipping.js";
import makeShippingRepository from "./shippingRepository.js";

export const ShippingRepository = makeShippingRepository({ service: ShippingService });
