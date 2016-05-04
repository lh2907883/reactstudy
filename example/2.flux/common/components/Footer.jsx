import React, { Component } from 'react';
import { render } from 'react-dom';

import AppStore from '../../stores/AppStore'

function getStateFromStores(){
  return {
    price: AppStore.getPrice()
  }
}

class Footer extends Component {
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
        {this.state.price}
      </div>
    );
  }

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange() {
    this.setState(getStateFromStores());
  }
}

export default Footer