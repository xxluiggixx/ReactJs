const { render, getByText } = require("@testing-library/react");
const { default: PrimeraApp } = require("../PrimeraApp");
import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp/>", () => {
  /*   test('should show message "Hola, Soy Goku" ', () => {
    const saludo = "Hola, soy Goku";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  }); */
  test("Debe de mostrar <PrimeraApp/> correcatamente", () => {
    const saludo = "Hola, soy Goku!";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de mostrar el subtitulo enviado por props", () => {
    const subtitulo = "Soy un subtitulo";
    const saludo = "Hola, soy Goku!";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
