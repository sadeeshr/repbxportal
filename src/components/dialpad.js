import React, { Component } from 'react';
import { Button, ButtonToolbar, Row, Col, Panel, Alert, Glyphicon } from 'react-bootstrap';

class Dialpad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ""
        };
    }

    handleKeyPress = (e) => {
        // e.preventDefault();
        // console.log("Key press: ", e.target);
        // console.log("Key value: ", e.target.value);
        this.setState({
            phone: this.state.phone + e.target.value
        });
    }

    handleDial = (e) => {
        e.preventDefault();
        this.uri = 'sip:' + this.state.phone + '@siptest.apayaa.com:5060';
        this.props.setphone(this.state.phone);
        this.state.phone.length > 0 ? this.props.dialFunc(this.uri, this.props.options, 'dial') : console.log("No Number to dial");
    }

    render() {
        return (
            <div>
                <h3 style={{ textAlign: "center", fontSize: "30px" }}> <Alert bsStyle="warning"><strong>{this.state.phone}</strong></Alert></h3>
                <Panel bsStyle="default">
                    <Row>
                        <ButtonToolbar>
                            <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={1}>1</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={2}>2</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={3}>3</Button> </Col>
                        </ButtonToolbar>
                    </Row>
                    <p></p>
                    <Row>
                        <ButtonToolbar>
                            <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={4}>4</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={5}>5</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={6}>6</Button> </Col>
                        </ButtonToolbar>
                    </Row>
                    <p></p>
                    <Row>
                        <ButtonToolbar>
                            <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={7}>7</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={8}>8</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={9}>9</Button> </Col>
                        </ButtonToolbar>
                    </Row>
                    <p></p>
                    <Row>
                        <ButtonToolbar>
                            <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value="*">*</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={0}>0</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large" onClick={this.handleKeyPress.bind(this)} value="#">#</Button> </Col>
                        </ButtonToolbar>
                    </Row>
                </Panel>
                <Button bsStyle="success" block><Glyphicon glyph="earphone" onClick={this.handleDial.bind(this)} /></Button>
            </div>
        );
    }
}

export default Dialpad;