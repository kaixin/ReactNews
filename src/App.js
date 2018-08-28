import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
import MediaQuery from 'react-responsive';

import PCIndex from './js/PCIndex';
import MobileIndex from './js/MobileIndex.js'

import 'antd/dist/antd.css';
import './css/pc.css'
import './css/mobile.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PCIndex></PCIndex>
                </MediaQuery>

                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
