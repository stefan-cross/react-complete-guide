import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
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

    render() {

        let persons = null;
        let btnClass = '';

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
            btnClass = classes.Red;
        }

        // Program logic to set classes
        const assignedClasses = [];
        if(this.state.persons.length <= 1) {
            assignedClasses.push(assignedClasses.red);
        }
        if (this.state.persons.length <= 0) {
            assignedClasses.push(assignedClasses.bold);
        }

        return (
            <div className={classes.App}>

                <p className={assignedClasses.join(' ')}>THIS IS WORKING</p>
                <button
                    className={btnClass}
                    onClick={ this.togglePersonsHandler }>
                    Toggle Person
                </button>

                {persons}

            </div>
        );
        // return React.createElement('div', {className: 'App'}, React ..)
    }
}

// Higher order component, wrapping and injecting functionality
export default App;
