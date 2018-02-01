import React, { Component } from 'react';

class StudentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: null
        };
    }

    render() {
        return(
            <div>
                <input type="text" name="name" placeholder="Type the name"></input>
                <input type="number" name="age" placeholder="Type the age"></input>
                <button>Add</button>
            </div>
        );
    }
}

export default StudentForm;