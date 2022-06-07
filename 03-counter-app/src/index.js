import React from 'react';
import ReactDOM from 'react-dom'; // react < 18
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';
import './index.css';

// react < 18
const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp value={123} />, divRoot );

// react 18
//const root = createRoot(document.getElementById('app'));
//root.render(<CounterApp value={123} />);
//root.render(<PrimeraApp saludo="Hola, Soy Goku" />);