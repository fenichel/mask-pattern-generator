import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import MyForm from './Form.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyForm></MyForm>
      </header>
    </div>
  );
}

export default App;
