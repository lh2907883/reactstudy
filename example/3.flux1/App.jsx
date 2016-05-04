import React, { Component } from 'react';
import { render } from 'react-dom';

import Count from './common/components/Count';
import Footer from './common/components/Footer';
import MyButton from './common/components/MyButton';

import AppStore from './stores/AppStore';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = AppStore.getAppState();
    }

    render() {
        return (
            <div>
                <Count value={this.state.count} />
                <div>{this.state.div.html}</div>
                <div>{this.state.div.html1}</div>
                <Footer />
                <MyButton />
            </div>
        );
    }
}
export default App;