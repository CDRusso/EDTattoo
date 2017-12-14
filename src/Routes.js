import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

// pages
import Art from './pages/Art'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

const MainPagesContainer = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Art" component={Art}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Gallery" component={Gallery}/>
        </Switch>
    </Router>
);

export default MainPagesContainer