import sumarCadenas from "./sumador.js";

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(sumarCadenas("")).toEqual(0);
  });

  it("deberia retornar el mismo numero para una cadena con un solo numero", () => {
    expect(sumarCadenas("2")).toEqual(2);
  });

  it("deberia sumar dos numeros separados por coma", () => {
    expect(sumarCadenas("1,2")).toEqual(3);
  });
});
