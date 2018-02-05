import React, { Component } from 'react';

class StudentList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            students: this.props.students
        };
    }

    render() {
        const students = this.state.students.map((student) => {
            return <li key={student.name}>{student.name} - {student.age}<button type="button" onClick={(evt) => this.removeItem(student)}>Remover</button></li>    
        });

        return(
            <div>
                <ul>
                    {students}
                </ul>
            </div>
        );
    }

    removeItem = (student) => {
        const newState = this.state.students;
        if(newState.indexOf(student) > -1) {
            newState.splice(newState.indexOf(student), 1);
            this.setState({
                students: newState
            });
        }
    }
}

export default StudentList;