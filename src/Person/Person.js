import React, { Component } from 'react';


// Props are passed in
const person = (props) => {
    return (
        <div onClick={props.click}>
            <p>I'm {props.name} and I am {props.age} years of youth!</p>
            <p>{props.children}</p>
            {/* the value now adds two way binding, console will error for other field without onChange added */}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;