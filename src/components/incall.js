import React, { Component } from 'react';
import { Button, ButtonToolbar,Row, Col, Panel, Glyphicon } from 'react-bootstrap';

class Incall extends Component {

    handleHangup = (e) => {
        e.preventDefault();
        this.props.hangupFunc();
    }

    handleKeyPress = (e) => {
        // console.log("Key value: ", e.target.value);    
    }

    render() {
        return (
            <div>
            <Panel bsStyle="info"> 
                <Row>
                    <ButtonToolbar>
                        <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={1}>1</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={2}>2</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={3}>3</Button> </Col>
                    </ButtonToolbar>
                </Row>
                <p></p>
                <Row>
                    <ButtonToolbar>
                        <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={4}>4</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={5}>5</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={6}>6</Button> </Col>
                    </ButtonToolbar>
                </Row>
                <p></p>
                <Row>
                <ButtonToolbar>
                    <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={7}>7</Button> </Col>
                    <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={8}>8</Button> </Col>
                    <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={9}>9</Button> </Col>
                </ButtonToolbar>
                </Row>
                <p></p>
                <Row>
                    <ButtonToolbar>
                        <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value="*">*</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value={0}>0</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="large" onClick={this.handleKeyPress.bind(this)} value="#">#</Button> </Col>
                    </ButtonToolbar>
                </Row>
            </Panel>
            <Button bsStyle="danger" block><Glyphicon glyph="earphone" onClick={this.handleHangup.bind(this)}/></Button>
            </div>
        );
    }
}

export default Incall;