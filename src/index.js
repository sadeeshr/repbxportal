import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import Login from './components/login';
import Home from './components/home';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
store.subscribe(() => { console.log("store: ", store.getState())});
// store.dispatch(authorizationRequest(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Apayaa PBX 2.0
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Login</NavItem>
                    
                </Nav>    
                <Nav pullRight>
                    <NavDropdown eventKey={3} title={<Glyphicon glyph="align-justify" />} id="basic-nav-dropdown" noCaret>
                        <MenuItem eventKey={3.1}>About</MenuItem>
                        <MenuItem eventKey={3.2}>Contact</MenuItem>
                        <MenuItem eventKey={3.3}>Support</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Terms&Conditions</MenuItem>
                    </NavDropdown>
                </Nav>         
            </Navbar>
            
                <Route exact path="/" component={Login}/>            
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>            
            </div>
        </Router>
    </Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
