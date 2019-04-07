import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const classes = [];
    // if (props.state.persons.length <= 2) {
    //   classes.push('red');
    // }
    // if (props.state.persons.length <= 1) {
    //   classes.push('bold');
    // }

    return (
        <div className="Cockpit">
            <h1> Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                onClick={props.toggle}>Toggle Persons</button>
        </div>
    )
};

export default cockpit;