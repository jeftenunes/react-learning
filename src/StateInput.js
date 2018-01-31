import React, { Component } from 'react';

class StateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        setTimeout(() => {
            this.setState({ name: 'Jéfte' });
        }, 1000);
    }

    render() {
        return(
            <div>
                <input type="text" name="name" value={this.state.name}></input>
            </div>
        );
    }
}

export default StateInput;