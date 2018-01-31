import React, { Component } from 'react';
import StateInput from '../src/StateInput';

class HelloWorld extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Jéfte'
        };
    }

    render() {
        const style = {
            color: '#FF0000',
            fontSize: 50
          };
      

        return (
            <div className="HelloWord">
                <h1 style={style}>
                    Hello, World!
                </h1>
                <span>{this.state.name}</span>
                <StateInput />
            </div>
        );
    }
}

export default HelloWorld;