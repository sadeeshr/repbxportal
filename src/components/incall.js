import React, { Component } from 'react';
import { Label, Button, ButtonToolbar, Grid, Row, Col, Panel, Glyphicon, Modal, ProgressBar } from 'react-bootstrap';

class Incall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inDtmf  : false,
            secondsElapsed  : 25
        };
    }
    
    formattedSeconds = (sec) => {
        Math.floor(sec / 60) +
        ':' +
      ('0' + sec % 60).slice(-2)
    }
    
      
    handleHangup = (e) => {
        e.preventDefault();
        this.props.hangupFunc();
    }

    handleKeyPress = (e) => {
        console.log("DTMF Key value: ", e.target.value);    
    }

    toggleKeypad = () => {
        this.setState({inDtmf   :   !this.state.inDtmf})
    }

    render() {
        return (
            <div>
            <Panel bsStyle="info"> 
            <Col md={1}>
            <Button bsStyle="primary" onClick={this.toggleKeypad}><Glyphicon glyph="th"/></Button>
        </Col> 
        <Col mdOffset={1} md={1}>
            <Button bsStyle="warning" onClick={this.toggleKeypad}><Glyphicon glyph="volume-off"/></Button>
        </Col> 
        <Col mdOffset={1} md={1}>
        <Button bsStyle="danger" onClick={this.toggleKeypad}><Glyphicon glyph="pause"/></Button>
        </Col> 
        <Col mdOffset={1} md={1}>
            <Button bsStyle="success" onClick={this.toggleKeypad}><Glyphicon glyph="music"/></Button>
        </Col>
            </Panel> 
                    
            
            <ProgressBar label="Trying" hidden={false} style={{width:265}} striped bsStyle="warning" now={80} key={1} />
            <ProgressBar label="Ringing" style={{width:265}} bsStyle="info" now={70} key={2} />
            <ProgressBar label="Talking" style={{width:265}} active bsStyle="success" now={90} key={3} />                     
            <ProgressBar label="Hangup" style={{width:265}} active bsStyle="danger" now={50} key={4} />    
            <p/>
            <h1 style={{textAlign : "center", fontSize: "60px"}}><Label> 00:05:20 </Label></h1>
             
                <Modal bsSize="sm" show={this.state.inDtmf} container={this} onHide={this.toggleKeypad}>
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
            <Button bsStyle="danger" block onClick={this.handleHangup.bind(this)}><Glyphicon glyph="earphone"/></Button>
            </Modal.Footer>
            </div>
        );
    }
}

export default Incall;