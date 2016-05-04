import React from 'react'
import { render } from 'react-dom'

var Fuck = React.createClass({
  contextTypes: {
    store: React.PropTypes.object
  },
  render: function() {
    return (
      <span>
        {this.context.store.name}
      </span>
    );
  }
});

var Button = React.createClass({
  contextTypes: {
    store: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <button style={{background: this.context.store.color}}>
        {this.props.children}
      </button>
    );
  }
});

var Message = React.createClass({
  childContextTypes: {
    store: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      store: {
        color: "red", 
        name: 'you111'
      }
    }
  },
  render: function() {
    debugger;
    return (
      <div>
        1231 
        <Button>
          <Fuck />
        </Button>
      </div>
    );
  }
});

render(
    <Message />,
    document.querySelector("#root")
);