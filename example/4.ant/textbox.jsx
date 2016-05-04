var Textbox = React.createClass({
  getDefaultProps: function() {
    return {
      value: 'default value'
    };
  },
  render: function() {
    return (
      <input type="text" value={this.props.value} />
    );
  }
});

export default Textbox;

