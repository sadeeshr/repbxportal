import React, { Component } from 'react';
import { Button, ButtonToolbar,Row, Col, Panel } from 'react-bootstrap';

class Dialpad extends Component {
    render() {
        return (
            <div>
                <Panel eventKey="1" bsStyle="default"> 
                    <Row>
                        <ButtonToolbar>
                            <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large">1</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">2</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">3</Button> </Col>
                        </ButtonToolbar>
                    </Row>
                    <p></p>
                    <Row>
                        <ButtonToolbar>
                            <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large">4</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">5</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">6</Button> </Col>
                        </ButtonToolbar>
                    </Row>
                    <p></p>
                    <Row>
                    <ButtonToolbar>
                        <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large">7</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">8</Button> </Col>
                        <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">9</Button> </Col>
                    </ButtonToolbar>
                    </Row>
                    <p></p>
                    <Row>
                        <ButtonToolbar>
                            <Col mdOffset={1} md={1}> <Button bsStyle="info" bsSize="large">*</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">0</Button> </Col>
                            <Col mdOffset={2} md={1}> <Button bsStyle="info" bsSize="large">#</Button> </Col>
                        </ButtonToolbar>
                    </Row>
                </Panel>
            </div>
        );
    }
}

export default Dialpad;