import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './action'
import Fuck from './Fuck.js'

class App extends Component {
  constructor(props) {
    debugger;
    super(props);
  }     
  render() {
    return (
      <div>
        <input type='text' value={this.props.propsValue} onChange={this.changeHandle.bind(this)} ref="input"/>
        {this.props.propsValue}
        <Fuck aaa="11" />
      </div>
    );
  }
  changeHandle(){
    const node = ReactDOM.findDOMNode(this.refs.input);
    const value = node.value.trim();
    this.props.change(value);
  }
}

function mapStateToProps(state) {
  return {
    propsValue: state.value
  }
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps,action)(App);
// export default App