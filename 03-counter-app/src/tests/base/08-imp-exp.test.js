const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
import heroes from "../../data/heroes";

describe("Pruebas en funcions de Héroes", () => {
  test("debe retornar un héroe por id ", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroesData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroesData);
  });
  test("debe retornar undefind si héroe no existe ", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    // const heroesData = heroes.find((h) => h.id === id);
    expect(heroe).toBe(undefined);
  });
  /* debe retornar un arreglo con los héroes de DC
  owner
  toEqual al arreglo filtrado */
  test("debe retornar un arreglo con los héroes de DC ", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    const heroesData = heroes.filter((o) => o.owner === owner);
    expect(heroe).toEqual(heroesData);
  });

  /* 
  debe retornar un arreglo con los héroes de Marvel
  lenght = 2  toBe*/
  test("debe retornar un arreglo con los héroes de Marvel ", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    // const heroesData = length.heroes.filter((o) => o.owner === owner);
    expect(heroe.length).toBe(2);
  });
});
