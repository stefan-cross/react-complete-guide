import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                click={ () => this.props.clicked(index) }
                name={person.name}
                age={person.age}
                // Key is used to enable react to efficiently read DOM and map changes from future to past state
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });

    }
}
export default Persons;