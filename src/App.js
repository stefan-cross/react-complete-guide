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
        ]
    }


    /* Protects from global scope of this */
    switchNameHandler = (newName) => {
        this.setState({persons: [
                {name: newName, age: 29},
                {name: 'Stefan', age: 30},
        ]})
    }

    nameChangedHandler  = (event) => {
        this.setState({persons: [
                {name: 'Olwen', age: 29},
                {name: event.target.value , age: 30},
        ]})
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
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
                {/*
                note the inline styling
                */}
                <button
                    style={style}
                    onClick={ () => this.switchNameHandler('FOOO!') }>
                    Switch name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Bar')}
                    changed={this.nameChangedHandler}>
                    Foods: Salads, Vegetables
                </Person>
            </div>
        );
    }
}

export default App;
