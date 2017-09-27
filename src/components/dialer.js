import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Grid, Glyphicon, Row, Col, Panel, Modal, OverlayTrigger, Tooltip, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Dialpad from './dialpad';
import Incall from './incall';

class Dialer extends Component {

    constructor(props) {
        super(props);
        this.options = {
            media: {
                constraints: {
                    audio: true,
                    video: false
                }
            }
        };
        this.state = {
            phone: ""
        }
    }

    handleQuickdial(e) {
        console.log(this.state.phone);
        this.uri = 'sip:' + this.state.phone + '@siptest.apayaa.com:5060';
        this.state.phone > 0 ? this.props.apDial(this.uri, this.options, 'quickdial') : console.log("No Number to dial");
    }

    handleInputChange(e) {
        this.setState({ phone: e.target.value });
    }

    render() {
        const dtooltip = (
            <Tooltip id="dialButtonT">Click to Open <strong>Dialpad</strong></Tooltip>
        );


        return (
            <div>
                <Panel header="Dialer" bsStyle="success">
                    <Grid>
                        <Row>
                            <Col md={1}>
                                <OverlayTrigger placement="right" overlay={dtooltip}>
                                    <Button bsStyle="success" bsSize="large" onClick={this.props.toggleDialpad}><Glyphicon glyph="th" /></Button>
                                </OverlayTrigger>
                            </Col>
                            <Col mdOffset={2} md={4}>
                                <FormGroup bsSize="large">
                                    <InputGroup>
                                        <FormControl value={this.state.phone} onChange={this.handleInputChange.bind(this)} placeholder="enter phone number" type="text" />
                                        <InputGroup.Button>
                                            <Button bsStyle="success" bsSize="large" onClick={this.handleQuickdial.bind(this)}> Quick Dial <Glyphicon glyph="phone" /></Button>
                                        </InputGroup.Button>

                                    </InputGroup>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Grid>
                </Panel>

                <Modal bsSize="sm" show={this.props.dialpad} onHide={this.props.toggleDialpad}>
                    <Modal.Body>
                        <Dialpad dialFunc={this.props.apDial} options={this.options} setphone={(value) => { this.setState({ phone: value }) }} />
                    </Modal.Body>
                </Modal>
                <Modal bsSize="sm" backdrop="static" show={this.props.incall}>
                    <Modal.Body>
                        <Incall phone={this.state.phone} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("Initial State: ",state);
    return { ...state };
};

const mapActionsToProps = (dispatch) => {
    console.log("Actions: ", Actions);
    return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Dialer);
