import React, { Component } from 'react';
import { render } from 'react-dom';

import AppDispatcher from '../AppDispatcher'

// export const CountActions = {
//   Change: Symbol()
// }

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value};
    }

    render() {
        return (
            <div>
                <button onClick={this.calculate.bind(this, '-')}>-</button>
                {this.state.value}
                <button onClick={this.calculate.bind(this, '+')}>+</button>
            </div>
        );
    }

    calculate(type, e) {
        var newCount = this.state.value
        if(type == '-' && this.state.value > this.props.min){
            this.setState({ value: --newCount });
        }
        else if(type == '+' && this.state.value < this.props.max){
            this.setState({ value: ++newCount });
        }
        else{
            return;
        }
        //这个实际上是CountAction做的事(把它省略了,代码放这了)
        AppDispatcher.dispatch({
            type: 'CountChange',
            value: newCount
        });
    }
}

Count.defaultProps = { 
    value: 1, 
    min: 1,
    max: 99 
};

export default Count