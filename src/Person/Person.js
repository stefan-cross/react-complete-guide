import React, { Component } from 'react';
import Radium from 'radium';

import './Person.css';

// Props are passed in
const person = (props) => {

    const style = {
        '@media (max-width: 500px)': {
            width: '450px',
            backgroundColor: 'red'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years of youth!</p>
            <p>{props.children}</p>
            {/* the value now adds two way binding, console will error for other field without onChange added */}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default Radium(person);