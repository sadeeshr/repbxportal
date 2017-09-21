import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Apayaa PBX 2.0</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Home</NavItem>
                    <NavItem eventKey={2} href="#">Login</NavItem>
                    <NavDropdown eventKey={3} title="more..." id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>About</MenuItem>
                        <MenuItem eventKey={3.2}>Contact</MenuItem>
                        <MenuItem eventKey={3.3}>Support</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Terms&Conditions</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            </div>
        );
    }
}

export default Login;