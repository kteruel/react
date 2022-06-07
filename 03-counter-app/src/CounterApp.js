import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value ); // return []

    // handleAdd
    const handleAdd = () => {
        //setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    // handleSub
    const handleSub = () => {
        //setCounter( counter + 1 );
        setCounter( (c) => c - 1 );
    }

    // Reset
    const Reset = () => {
        //setCounter( counter + 1 );
        setCounter( (c) => value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ Reset }>Reset</button>
            <button onClick={ handleSub }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;

// Creado con el shortcut 'racfp'