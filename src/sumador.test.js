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

  it("deberia sumar varios numeros separados por coma", () => {
    expect(sumarCadenas("1,2,3,4")).toEqual(10);
  });

  it("deberia sumar numeros separados por guion o coma", () => {
    expect(sumarCadenas("1-2,3")).toEqual(6);
  });

  it("deberia permitir especificar un delimitador personalizado", () => {
    expect(sumarCadenas("//[;] 6;7;4")).toEqual(17);
  });
});
