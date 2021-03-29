import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Index from './pages';
import Form from './pages/form';
import List from './pages/list';

export default class RouterComp extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Index} />
                <Route exact path="/form" component={Form} />
                <Route exact path="/list" component={List} />
            </Router>
        );
    }
}