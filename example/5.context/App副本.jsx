import React from 'react'
import { render } from 'react-dom'

var Fuck = React.createClass({
  contextTypes: {
    name: React.PropTypes.string
  },
  render: function() {
    return (
      <span>
        {this.context.name}
      </span>
    );
  }
});

var Button = React.createClass({
  contextTypes: {
    color: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
});

var Message = React.createClass({
  childContextTypes: {
    color: React.PropTypes.string,
    name: React.PropTypes.string,
  },
  getChildContext: function() {
    return {color: "purple", name: 'you'};
  },
  render: function() {
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