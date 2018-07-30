import React, { Component } from 'react';

import classes from './Person.css';

import WithClass from '../../../hoc/WithClass';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('Personjs inside constructor', props);

    }

    componentWillMount() {
        console.log("Personjs Inside componentWillMount()")
    }


    componentDidMount() {
        console.log("Personjs Inside componentDidMount()")
    }


    render() {

        console.log("Personjs Inside render()")

        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years of youth!</p>
                <p>{this.props.children}</p>
                {/* the value now adds two way binding, console will error for other field without onChange added */}
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </WithClass>
        )

        // Possible to return an array of jsx element, note commas and keys!
        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years of youth!</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name}></input>
        // ]
    }
};

export default Person;