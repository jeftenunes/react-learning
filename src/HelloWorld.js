import React, { Component } from 'react';

class HelloWorld extends Component {
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
            </div>
        );
    }
}

export default HelloWorld;