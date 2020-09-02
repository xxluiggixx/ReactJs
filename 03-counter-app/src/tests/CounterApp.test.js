const { shallow } = require("enzyme");
const { default: CounterApp } = require("../CounterApp");
import "@testing-library/jest-dom";
import React from "react";
describe("Pruebas de CounterApp", () => {
  /*#tarea 
    1. Crear las siguientes pruebas para el <CounterApp/>
        *debe de mostrar <CounterApp/> correctamente (hacer match con un snapshot)
            y sus valores por defecto
        
        *debe de mostrar el valor por defecto de 100
            *usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
    */
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("Debe mostrar <CounterApp/> correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterH2 = wrapper.find("h2").text().trim();
    expect(counterH2).toBe("100");
  });
  test("Debe de incrementar con el botón +1", () => {
    const btnPlus = wrapper.find("button").at(0).simulate("click");
    const counterH2 = wrapper.find("h2").text().trim();
    expect(counterH2).toBe("101");
  });
  test("Debe de establecer el valor por defecto con el botón Reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    const btnPlus = wrapper.find("button").at(2).simulate("click");
    const btnReset = wrapper.find("button").at(1).simulate("click");
    const counterH2 = wrapper.find("h2").text().trim();
    expect(counterH2).toBe("105");
  });
  test("Debe de decrementar con el botón -1", () => {
    const btnPlus = wrapper.find("button").at(2).simulate("click");
    const counterH2 = wrapper.find("h2").text().trim();
    expect(counterH2).toBe("99");
  });
});
