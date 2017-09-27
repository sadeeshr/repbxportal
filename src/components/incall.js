import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Label, Button, ButtonToolbar, Row, Col, Panel, Glyphicon, Modal, ProgressBar, Alert, Tooltip, OverlayTrigger } from 'react-bootstrap';

class Incall extends Component {

    constructor(props) {
        super(props);
        this.timer = null;
    }

    formattedSeconds = (sec) => {
        return Math.floor(sec / 60) + ':' + ('0' + sec % 60).slice(-2);
    }

    handleHangup = (e) => {
        e.preventDefault();
        this.props.resetCalltimer();
        this.props.apHangup();
    }

    handleKeyPress = (e) => {
        console.log("DTMF Key value: ", e.target.value);
    }

    render() {
        const dtooltip = (<Tooltip id="dtmf">Enter <strong>DTMF</strong></Tooltip>);
        const mtooltip = (<Tooltip id="mute">Mute <strong>Call</strong></Tooltip>);
        const ptooltip = (<Tooltip id="pause">Pause <strong>Recording</strong></Tooltip>);
        const htooltip = (<Tooltip id="hold">Play <strong>Hold Music</strong></Tooltip>);
        return (
            <div>
                <h3 style={{ textAlign: "center", fontSize: "30px" }}> <Alert bsStyle="info"><strong>{this.props.phone}</strong></Alert></h3>
                <Panel bsStyle="success" hidden={!this.props.calltalking}>
                    <Col md={1}>
                        <OverlayTrigger placement="top" overlay={dtooltip}>
                            <Button bsStyle="primary" onClick={this.props.toggleKeypad}><Glyphicon glyph="th" /></Button>
                        </OverlayTrigger>
                    </Col>
                    <Col mdOffset={1} md={1}>
                        <OverlayTrigger placement="top" overlay={mtooltip}>
                            <Button bsStyle="warning" onClick={this.props.toggleKeypad}><Glyphicon glyph="volume-off" /></Button>
                        </OverlayTrigger>
                    </Col>
                    <Col mdOffset={1} md={1}>
                        <OverlayTrigger placement="top" overlay={ptooltip}>
                            <Button bsStyle="danger" onClick={this.props.toggleKeypad}><Glyphicon glyph="pause" /></Button>
                        </OverlayTrigger>
                    </Col>
                    <Col mdOffset={1} md={1}>
                        <OverlayTrigger placement="top" overlay={htooltip}>
                            <Button bsStyle="success" onClick={this.props.toggleKeypad}><Glyphicon glyph="music" /></Button>
                        </OverlayTrigger>
                    </Col>
                </Panel>


                <ProgressBar hidden={!this.props.calltrying} label="Trying" style={{ width: 265 }} active={this.props.calltrying && !this.props.callringing} bsStyle="warning" now={this.props.callringing ? 100 : 50} key={1} />
                <ProgressBar hidden={!this.props.callringing} label="Ringing" style={{ width: 265 }} active={this.props.callringing && !this.props.calltalking} bsStyle="info" now={this.props.calltalking ? 100 : 80} key={2} />
                <ProgressBar hidden={!this.props.calltalking} label="Talking" style={{ width: 265 }} active={this.props.calltalking} bsStyle="success" now={this.props.calltalking ? 100 : 10} key={3} />
                <p />
                <div hidden={!this.props.calltalking}><h1 style={{ textAlign: "center", fontSize: "60px" }}><Label> {this.formattedSeconds(this.props.elapsed)} </Label></h1></div>

                <Modal bsSize="sm" show={this.props.keypad} container={this} onHide={this.props.toggleKeypad}>
                    <Modal.Header closeButton>
                        <Modal.Title>Key In your DTMF digits</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <ButtonToolbar>
                                <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={1}>1</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={2}>2</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={3}>3</Button> </Col>
                            </ButtonToolbar>
                        </Row>
                        <p></p>
                        <Row>
                            <ButtonToolbar>
                                <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={4}>4</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={5}>5</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={6}>6</Button> </Col>
                            </ButtonToolbar>
                        </Row>
                        <p></p>
                        <Row>
                            <ButtonToolbar>
                                <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={7}>7</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={8}>8</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={9}>9</Button> </Col>
                            </ButtonToolbar>
                        </Row>
                        <p></p>
                        <Row>
                            <ButtonToolbar>
                                <Col mdOffset={2} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value="*">*</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value={0}>0</Button> </Col>
                                <Col mdOffset={1} md={1}> <Button bsStyle="warning" bsSize="small" onClick={this.handleKeyPress.bind(this)} value="#">#</Button> </Col>
                            </ButtonToolbar>
                        </Row>
                    </Modal.Body>
                </Modal>
                <Modal.Footer>
                    <Button bsStyle="danger" block onClick={this.handleHangup.bind(this)}><Glyphicon glyph="earphone" /></Button>
                </Modal.Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("incall state: ", state);
    return {
        keypad: state.keypad,
        elapsed: state.elapsed ? state.elapsed : 1,
        calltrying: state.calltrying,
        tryingvalue: 50,
        callringing: state.callringing,
        ringingvalue: 50,
        calltalking: state.calltalking,
        talkingvalue: 50
    };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Incall);