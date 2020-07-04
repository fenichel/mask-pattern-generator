import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import MyForm from './Form.js';


function App() {
  return (
    <div className="App">
      <Container>
        <MyForm></MyForm>
      </Container>
    </div>
  );
}

export default App;
