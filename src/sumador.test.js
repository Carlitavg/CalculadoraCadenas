import sumarCadenas from "./sumador.js";

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(sumarCadenas("")).toEqual(0);
  });
});
