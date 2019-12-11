import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FORMULARIO from './AprendendoReact/formulario'
// import MAPALUNOS from './AprendendoReact/map-alunos'
import PROPS from './AprendendoReact/props'
import App1 from './AprendendoReact/App1'
// import Menu from './AprendendoReact/Menu';

function App() {
  return (
    <div className="App">
      {/* <FORMULARIO></FORMULARIO>
      <MAPALUNOS></MAPALUNOS> */}
      <App1></App1>
      {/* <PROPS></PROPS>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
