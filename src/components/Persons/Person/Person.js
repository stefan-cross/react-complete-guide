import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years of youth!</p>
                <p>{this.props.children}</p>
                {/* the value now adds two way binding, console will error for other field without onChange added */}
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
        )
    }
};

export default Person;