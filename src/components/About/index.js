// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Head from './components/head.js';
import Body from './components/body.js';
import Foot from './components/foot.js';

import './style.css';

class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

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

export default About;
