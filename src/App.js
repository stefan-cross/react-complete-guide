import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    // Managed from inside the component, only available when extending component
    state = {
        persons: [
            {id: 1, name: 'Olwen', age: 28},
            {id: 2, name: 'Stefan', age: 29},
        ],
        showPersons: false
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

    /*
    Everything within render, takes latest state, renders nothing or persons
    Persons is set more elegantly that with previous tenery conditional content
     */
    render() {

        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={ () => this.deletePersonHandler(index) }
                            name={person.name}
                            age={person.age}
                            // Key is used to enable react to efficiently read DOM and map changes from future to past state
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        // Program logic to set classes
        const classes = [];
        if(this.state.persons.length <= 1) {
            classes.push('red');
        }
        if (this.state.persons.length <= 0) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p className={classes.join(' ')}>THIS IS WORKING</p>
                <button
                    style={style}
                    onClick={ this.togglePersonsHandler }>
                    Toggle Person
                </button>

                {persons}

            </div>
        );
        // return React.createElement('div', {className: 'App'}, React ..)
    }
}

export default App;
