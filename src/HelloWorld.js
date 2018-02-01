import React, { Component } from 'react';
import Incrementor from '../src/Incrementor';

class HelloWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    render() {
        return (
            <div className="HelloWord">
                <h1>{this.state.txt}</h1>
                <Incrementor value={0}/>
            </div>
        );
    }
}

export default HelloWorld;