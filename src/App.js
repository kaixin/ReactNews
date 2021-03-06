import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
import MediaQuery from 'react-responsive';

import PCIndex from './js/PCIndex';
import MobileIndex from './js/MobileIndex.js'

import PCNewsDetails from './js/components/PCNewsDetails'
import MobileNewsDetails from './js/components/MobileNewsDetails'
import PCUserCenter from './js/components/PCUserCenter'
import MobileUserCenter from './js/components/MobileUserCenter'

import 'antd/dist/antd.css';
import './css/pc.css'
import './css/mobile.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                        <Route path="/usercenter" component={PCUserCenter}></Route>
                    </Router>
                </MediaQuery>

                <MediaQuery query='(max-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex}></Route>
                        <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                        <Route path="/usercenter" component={MobileUserCenter}></Route>
                    </Router>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
