import React, { Component } from 'react';
import { render } from 'react-dom';

import AppStore from '../../stores/AppStore'
import AppDispatcher from '../AppDispatcher'

function getStateFromStores(){
    return {
        text: AppStore.getBtnText()
    }
}

class MyButton extends Component {
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

    shouldComponentUpdate(nextProps, nextState){
        var res = this.state.text != nextState.text;
        alert(res ? '情况1:检测到setState前后的state的不同更新UI'
            : '情况2:在setState之前state已经更新好了,那么因为是同一个state引用,所以检测不到发生的变化')
        //如果确实是情况2,可以使用immutable来解决(参考 https://github.com/facebook/immutable-js)
        return res;
    }

    render() {
        return (
            <div>
                <button onClick={this._onClick1.bind(this)}>{this.state.text}</button>
                <button onClick={this._onClick2.bind(this)}>{this.state.text}</button>
            </div>
        );
    }

    _onClick1() {
        var btnText = this.state.text + 'he';
        AppDispatcher.dispatch({
            type: 'BtnTextChange',
            value: btnText
        });
    }

    _onClick2() {
        this.state.text += 'he';
        this.setState(this.state);
    }

    /**
     * Event handler for 'change' events coming from the stores
     */
    _onChange() {
        this.setState(getStateFromStores());
    }
}

export default MyButton