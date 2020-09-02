const { getSaludo } = require("../../base/02-template-string");
import "@testing-library/jest-dom";

describe("Purebas en 02-template-string.test.js", () => {
  test("getSaludo debe retornar hola fernando ", () => {
    const nombre = "fernando";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });
  // getSaludo debe retornar Hola Luis si no hay argumento nombre
  test("getSaludo debe retornar Hola Luis ", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Luis");
  });
});
