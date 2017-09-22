import React, { Component } from 'react';
import { Button, Grid, Glyphicon, Row, Col, Panel } from 'react-bootstrap';
import Dialpad from './dialpad';
class Dialer extends Component {
    render() {
        return (
            <div>
            <Panel header="Dialer" eventKey="1" bsStyle="success">
            <Grid>
            <Row>
                <Col mdOffset={6} md={3}>
                    <Dialpad />
                    </Col>
                <Col mdOffset={7} md={1}>
                    <Button bsStyle="success" bsSize="large"><Glyphicon glyph="earphone" /></Button>
                </Col>
            </Row>
            
           
        </Grid>
        </Panel>
            
            </div>
        );
    }
}

export default Dialer;
