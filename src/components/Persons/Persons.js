import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
            click={ () => props.clicked(index) }
            name={person.name}
            age={person.age}
            // Key is used to enable react to efficiently read DOM and map changes from future to past state
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
        />
    });

export default persons;