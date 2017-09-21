
// src/components/App/index.js
import React, { PropTypes, Component } from 'react';

import './style.css';
import Head from './components/head.js';
import Body from './components/body.js';
import Foot from './components/foot.js';

class App extends Component {

  render() {
    return (
        <div className="Main">
            <Head />
            <Body />
            <Foot />
        </div>
    );
  }
}

export default App;
