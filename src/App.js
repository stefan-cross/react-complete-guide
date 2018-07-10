import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    // Managed from inside the component, only available when extending component
    state = {
        persons: [
            {name: 'Olwen', age: 28},
            {name: 'Stefan', age: 29},
        ],
        showPersons: false
    }


    nameChangedHandler  = (event) => {
        this.setState({persons: [
                {name: 'Olwen', age: 29},
                {name: event.target.value , age: 30},
        ]})
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
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
            backgroundColor: 'white',
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
                            age={person.age}/>
                    })}
                </div>
            );
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
                <button
                    style={style}
                    onClick={ this.togglePersonsHandler }>
                    Toggle Person
                </button>

                {persons}

            </div>
        );
    }
}

export default App;
