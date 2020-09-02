//funcional component
import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  /*     const saludo = 'Hola Mundo const'; */
  /*     if (!saludo) {
        throw new console.error('El saludo no existe');
    } */
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};
/* Los propsTypes sirven para definirle el tipo de parametro a pasar al componente
se lo deben importar en el componente*/
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  //   saludo: "Hola, soy Goku",
  subtitulo: "soy un subtitulo",
};

export default PrimeraApp;
