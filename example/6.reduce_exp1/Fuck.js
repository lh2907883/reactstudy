import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './action'

var ff = function(p){
  debugger;
}
var Fuck = (...ppp) => {
  return (
    <div>
      <button type='text' onClick={()=>{ff(ppp)}} />
    </div>
  );
}


//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect()(Fuck);