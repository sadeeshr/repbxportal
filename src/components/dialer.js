import React, { Component } from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Grid, Glyphicon, Row, Col, Panel, Modal } from 'react-bootstrap';
import Dialpad from './dialpad';
import Incall from './incall';

class Dialer extends Component {

    render() {
        // console.log("Dialer Props: ", this.props);
        this.Defaultprops = this.props;
        return (
            <div>
            <Panel header="Dialer" bsStyle="success">
                <Grid>
                    <Row>
                        <Col md={1}>
                            <Button bsStyle="success" bsSize="large" onClick={this.props.toggleDialpad}><Glyphicon glyph="th"/></Button>
                        </Col>                
                    </Row>
                </Grid>
            </Panel>

            <Modal bsSize="sm" show={this.props.dialpad} onHide={this.props.toggleDialpad}>
                <Modal.Body>
                        <Dialpad dialFunc={this.props.apDial}/>            
                </Modal.Body>
            </Modal>
            <Modal bsSize="sm" show={!this.props.incall} onHide={this.props.toggleDialpad}>
                <Modal.Body>
                        <Incall hangupFunc={this.props.apHangup}/>            
                </Modal.Body>
            </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("Initial State: ",state);
    return {...state};
};

const mapActionsToProps = (dispatch) => {
    console.log("Actions: ", Actions);
    return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps) (Dialer);
