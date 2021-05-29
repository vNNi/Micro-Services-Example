import { jest } from "@jest/globals";
import curryGetProducts from "../getProducts.js";

describe("[Controllers] - Product controller", () => {
  it("Should call res with json and status", async () => {
    const status = jest.fn();
    const res = {
      json: jest.fn().mockImplementation(() => ({ status })),
    };
    const searchImplementation = async () => ({});
    const controller = curryGetProducts({ searchProducts: searchImplementation });
    await controller({}, res);
    expect(res.json).toHaveBeenCalled();
    expect(status).toHaveBeenCalled();
  });
});
