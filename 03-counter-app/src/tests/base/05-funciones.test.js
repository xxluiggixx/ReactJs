const { getUser, getUsuarioActivo } = require("../../base/05-funciones");
import "@testing-library/jest-dom";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });
  //getUsuario debe de retornar un objeto
  test("getUsuario debe de retornar un objeto ", () => {
    const nombre = "xxluiggixx";
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const userActivo = getUsuarioActivo(nombre);
    expect(userActivo).toEqual(userTest);
  });
});
