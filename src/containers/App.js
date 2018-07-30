import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('Appjs inside constructor', props);
        // State can be set in copnstructor in more modern apps es6
        this.state = {
            persons: [
                {id: 1, name: 'Olwen', age: 28},
                {id: 2, name: 'Stefan', age: 29},
            ],
            showPersons: false
        }

    }

    componentWillMount() {
        console.log("Appjs Inside componentWillMount()")
    }


    componentDidMount() {
        console.log("Appjs Inside componentDidMount()")
    }


    nameChangedHandler  = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // Use spread operator to create new value of persons, avoids mutability by copying contents
        const person = {
            ...this.state.persons[personIndex]
        }

        // Now we can update as working with copy
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        // now we can set state to our copied and modified persons list
        this.setState({persons: persons})
    }

    // Update state in an immutable fashion!
    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.splice(); // make protective copy
        const persons = [...this.state.persons]; // new ES6 spread takes objs and makes copy
        persons.splice(personIndex, 1);
        this.setState({persons: persons})

    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {

        console.log("Appjs Inside render()")

        let persons = null;

        if(this.state.showPersons) {
            persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />
        }


        return (
            <div className={classes.App}>
            <Cockpit
                appTitle={this.props.title}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonsHandler} />
                {persons}

            </div>
        );
        // return React.createElement('div', {className: 'App'}, React ..)
    }
}

// Higher order component, wrapping and injecting functionality
export default App;
