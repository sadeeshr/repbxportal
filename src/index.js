import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/login'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Login}/>            
            <Route path="/login" component={Login}/>            
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
