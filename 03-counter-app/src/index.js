import React from 'react'; //se importa para utilizar jsx
import ReactDOM from 'react-dom';//Manipular el DOM
/* import PrimeraApp from './PrimeraApp';//Importar un componente */
import './index.css';//importar el CSS
import CounterApp from './CounterApp';




/* const saludo = <h1> Hola mundo!</h1>; */

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={ 123 } />,divRoot);