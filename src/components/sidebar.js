import React, { Component } from 'react';
import { Grid, Row, Col, Panel, PanelGroup } from 'react-bootstrap';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={2}>
                            <PanelGroup defaultActiveKey="1" accordion>
                            <Panel header="Apayaa PBX 2.0" eventKey="1" bsStyle="warning">Dialer default</Panel>
                            <Panel header="Recordings" eventKey="2" bsStyle="warning">Recordings here</Panel>
                            <Panel header="Calls History" eventKey="3" bsStyle="warning">CDR here</Panel>
                            <Panel header="Voicemails" eventKey="4" bsStyle="warning">Voicemails here</Panel>
                            <Panel header="Settings" eventKey="5" bsStyle="warning">Settings here</Panel>
                            </PanelGroup>                        
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Sidebar;