import {useState} from 'react';
import logo from './snowflake.jpg'
import './App.css';
import PrimerFormulario from './Componentes2/PrimerFormulario';
import {Button, Form}  from 'react-bootstrap';


function App() {
const [personaNombre,setPersona] = useState("Juan");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
        >
         Learn React
        </a>
        <PrimerFormulario personaNombre={personaNombre} />

      </header>
    </div>
  );
}

export default App;

