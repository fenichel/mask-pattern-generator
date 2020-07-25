import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MyForm from './Form.js';
import { SewingInstructions } from './SewingInstructions';
import { MeasurementInstructions } from './MeasurementInstructions';
import { Introduction } from './Introduction';
import { TheMath } from './TheMath';
import { Feedback } from './Feedback';

function App() {
  return (
    <div className="App">
      <Tabs
        defaultActiveKey="introduction"
        id="navtabs"
        transition={false}>
          <Tab eventKey="introduction" title="Introduction">
            <Introduction />
          </Tab>
        <Tab eventKey="measuring" title="Measurement instructions">

          <MeasurementInstructions />
        </Tab>
        <Tab eventKey="createPattern" title="Create Pattern">
          <MyForm />
        </Tab>
        <Tab eventKey="sewing" title="Sewing instructions">
          <SewingInstructions />
        </Tab>
        {/* <Tab eventKey="theMath" title="Show me the math!">
          <TheMath className='theMath' />
        </Tab> */}
      </Tabs>
    <Feedback />
    </div>
  );
}

export default App;
