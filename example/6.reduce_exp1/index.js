import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import inputApp from './reducers'

//store的初始值
let initStore = {
    value: 'fuckyou'
};
let store = createStore(inputApp, initStore);

store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);