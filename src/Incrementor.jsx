import React, { Component } from 'react';

class Incrementor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            valueToSum: 0
        };
    }

    render() {
        return(
            <div>
                <input type="number" name="counter" onChange={(evt) => this.setValue(evt)}></input>
                <button onClick={() => this.updateCount()}>
                    Clicked {this.state.counter} times
                </button>
            </div>
        );
    }

    setValue(evt) {
        const input = evt === undefined
        ? 1
        : evt.target.value !== '' 
            ? parseInt(evt.target.value)
            : 0;
        this.setState({ valueToSum: input });
    }

    updateCount() {
        this.setState((prevState, props) => {
            console.log(prevState);
            return { counter: prevState.counter + this.state.valueToSum  };
        });
    }
}

export default Incrementor;