import logo from './snowflake.jpg';
import './App.css';
import { Form, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form.Label>Nombre : </Form.Label>
        <Form.Control type="text"></Form.Control>
        <Button>Guardar</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          wato
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant = "primary" > wato </Button> {''}
      </header>
    </div>
  );
}

export default App;
