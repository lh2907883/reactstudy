// import ReactDOM from 'react-dom';
// import React from 'react';

import { findDOMNode } from 'react-dom';

import Textbox from './textbox.jsx';
// import { Button } from 'antd';
import Button from 'antd/lib/button';
 
var App = React.createClass({
  componentDidMount: function() {
    //拿到dom引用
    const el = findDOMNode(this);
  },
  // render: function() {
  //   return (
  //       <div>
  //           <Textbox {...this.props} />
  //           {
  //               [1,2,3,4].map((item) => {
  //                   return <div key={item}>123</div>
  //               })
  //           }
  //       </div>
  //   );
  // }
  render: function() {
    var items = [];
    for(var i=1; i<6; i++){
        items.push(<div key={i}>1212121</div>);
    }
    return (
        <div>
            <Button type="primary" className="aaa">主按钮</Button>
            <Textbox {...this.props} />
            {items}
        </div>
    );
  }
});

var store = {
  hehe: 'aaa',
  ok: true,
  n: 1234
};
ReactDOM.render(
    <Provider store={store}>
      <App value="12311" />
    </Provider>,
    document.getElementById('react-content')
);

