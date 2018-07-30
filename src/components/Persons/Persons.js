import React, { PureComponent } from 'react';

import Person from './Person/Person';

// Use Pure if you know that updates might not be required, dont make everything pure, performance hit in comparing state
// Place strategically!
class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('Personsjs inside constructor', props);

    }

    componentWillMount() {
        console.log("Personsjs Inside componentWillMount()")
    }


    componentDidMount() {
        console.log("Personsjs Inside componentDidMount()")
    }


    componentWillReceiveProps(nextProps) {
        console.log("Personsjs Inside componentWillReceiveProps()", nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Personsjs Inside shouldComponentUpdate()", nextProps, nextState)
    //
    //     // Careful as nextProps.persons !== this.props.persons only does a shallow, not a deep comparison
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }


    componentWillUpdate(nextProps, nextState) {
        console.log("Personsjs Inside componentWillUpdate()", nextProps, nextState)
    }

    componentDidUpdate(nextProps, nextState) {
        // Allowed to make side effects
        console.log("Personsjs Inside componentDidUpdate()", nextProps, nextState)
    }


    render() {

        console.log("Personsjs Inside render()")

        // Map and return array of persons
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