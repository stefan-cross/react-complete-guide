import React from 'react';

import classes from './Cockpit.css';


const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 1) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 0) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi Iam a react App</h1>
            <p className={assignedClasses.join(' ')}>THIS IS WORKING</p>
                <button
                    className={btnClass}
                    onClick={ props.clicked }>
                    Toggle Person
                </button>
        </div>
    );
}

export default cockpit;