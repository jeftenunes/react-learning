import StudentList from './StudentList';
import React, { Component } from 'react';

class StudentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: null,
            students: []
        };
    }

    render() {
        return(
            <div>
                <input type="text" name="name" placeholder="Type the name" onChange={(evt) => this.updateName(evt)}></input>
                <input type="number" name="age" placeholder="Type the age" onChange={(evt) => this.updateAge(evt)}></input>
                <button type="button" onClick={(evt) => this.insertUser(evt)}>Add</button>
                <StudentList students={this.state.students}/>
            </div>
        );
    }

    updateName = (e) => {
        console.log(e);
        return this.setState({
            name: e.target.value
        });
    }

    updateAge = (e) => {
        return this.setState({
            age: e.target.value
        });
    }

    insertUser = (e) => {
        this.state.students.push({
            name: this.state.name,
            age: this.state.age
        });

        return this.setState({
            age: null,
            name: ''
        });
    }
}

export default StudentForm;