import React from 'react'
import { render } from 'react-dom'

import store from './store.js'
import { Provider } from 'react-redux'

import App from './App.jsx'

// window.store = store;
//向Provider注入store,这样所有Provider的子孙组件都能使用store.getState()也就是state
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);


//参考: http://www.jianshu.com/p/3334467e4b32x