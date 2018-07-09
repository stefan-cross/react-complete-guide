import React, { Component } from 'react';


// Props are passed in
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years of youth!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;