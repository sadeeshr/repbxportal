import React, { Component } from 'react';
import {Col, FormGroup, FormControl, Form, ControlLabel,Checkbox, Button, Panel} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedin : false
        };
    }
    

    onLogin = (e) => {
        e.preventDefault();
        this.setState({loggedin: true});
        this.loggedin = true;
        console.log("Login success");
    }

    render() {
        if (this.state.loggedin) {
            console.log("i m logging here");
            return <Redirect to="/home" />;
        } else {
            return (
                <div>
                 <Form horizontal>
                    <Col mdOffset={4} md={4}>
                    <Panel header="PBX User" bsStyle="info">
                    <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} md={4}>
                      UserID
                    </Col>
                    <Col md={4}>
                      <FormControl type="text" placeholder="User ID" />
                    </Col>
                  </FormGroup>
              
                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} md={4}>
                      Password
                    </Col>
                    <Col md={4}>
                      <FormControl type="password" placeholder="Password" />
                    </Col>
                  </FormGroup>
                   <FormGroup>
                      <Col mdOffset={4} md={4}>
                        <Checkbox>Remember me</Checkbox>
                      </Col>
                    </FormGroup>
                
                    <FormGroup>
                      <Col mdOffset={4} md={4}>
                        <Button bsStyle="default" type="submit" onClick={this.onLogin.bind(this)}>
                          Sign in
                        </Button>
                      </Col>
                    </FormGroup>
                    </Panel>
                    </Col>
                
                   
                  </Form>
                  
                </div>
            );
        }        
    }
}

export default Login;