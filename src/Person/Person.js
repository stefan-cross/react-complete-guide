import React, { Component } from 'react';

import classes from './Person.css';

// Props are passed in
const person = (props) => {

    const rnd = Math.random();

    if(rnd > 0.7) {
        throw new Error('Somthing went wrong');
    }


    return (
        <div className={classes.Person} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years of youth!</p>
            <p>{props.children}</p>
            {/* the value now adds two way binding, console will error for other field without onChange added */}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;