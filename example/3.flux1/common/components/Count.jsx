import React, { Component } from 'react';
import { render } from 'react-dom';

import AppStore from '../../stores/AppStore'
import AppDispatcher from '../AppDispatcher'

function getStateFromStores(){
    return {
      value: AppStore.getCount()
    }
}

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = getStateFromStores();
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange.bind(this));
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

    /**
     * Event handler for 'change' events coming from the stores
     */
    _onChange() {
        this.setState(getStateFromStores());
    }

    calculate(type, e) {
        var newCount = this.state.value
        if(type == '-' && this.state.value > this.props.min){
            newCount--;
        }
        else if(type == '+' && this.state.value < this.props.max){
            newCount++;
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