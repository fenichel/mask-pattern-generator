import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MyForm from './Form.js';
import { SewingInstructions } from './SewingInstructions';
import { MeasurementInstructions } from './MeasurementInstructions';
import { Introduction } from './Introduction';


function App() {
  return (
    <div className="App">
      <Tabs
        defaultActiveKey="introduction"
        transition={false}>
          <Tab eventKey="introduction" title="Introduction">
            <Introduction></Introduction>
          </Tab>
        <Tab eventKey="measuring" title="Measurement instructions">

          <MeasurementInstructions></MeasurementInstructions>
        </Tab>
        <Tab eventKey="createPattern" title="Create Pattern">
          <Container>
            <MyForm></MyForm>
          </Container>    </Tab>
        <Tab eventKey="sewing" title="Sewing instructions">
          <SewingInstructions></SewingInstructions>
        </Tab>
      </Tabs>

    </div>
  );
}

export default App;
