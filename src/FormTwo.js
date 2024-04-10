import {Button,Form,Row,Card, CardFooter, CardBody,CardHeader}from 'react-bootstrap';
import { useState } from 'react';
import './FirstForm.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function FormTwo(personaregistro)  {

    function Click() {
        console.log(personaregistro);
    }

    const [ nombre, setNombre ] = useState ("");
    const [primerapellido, setprimerapellido] = useState("");
    const [segundoapellido, setsegundoapellido] = useState("");
    const [usuario, setusuario] = useState ("");
    const [contra, setcontra] = useState("");
    const [confcontra, setconfcontra] = useState("");

    const cambiarNombre = (e) => {
        const value=e.target.value;
        setNombre (value);
      };

      const cambiarprimerapellido = (e) => 
      {
        const value=e.target.value;
        setprimerapellido(value);
    };

    const cambiarsegundoapellido = (e) => 
      {
        const value=e.target.value;
        setsegundoapellido(value);
    };

    const cambiarusuario = (e) => 
      {
        const value=e.target.value;
        setusuario(value);
    };

    const cambiarcontra = (e) => 
      {
        const value=e.target.value;
        setcontra(value);
    };

    const cambiarconfcontra = (e) => 
      {
        const value=e.target.value;
        setconfcontra(value);
    };

      const guardarClick = () => {
        console.log("Nombre: ",nombre, );
        console.log("Primer Apellido: ",primerapellido);
        console.log("Segundo Apellido: ",segundoapellido);
        console.log("Nombre de usuario: ",usuario);
        console.log("Contraseña: ",contra);
        console.log("Confirmar Contraseña: ",confcontra);

      };

    return (
      <Form>
        <Card>
          <CardBody> 
            <Row>
              <Form.Label>Nombre:</Form.Label>
              <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              value={nombre}
              onChange={cambiarNombre}
              ></input>
            </Row> 
            <Row> 
              <Form.Label>Primer Apellido:</Form.Label>
              <input 
              type="text" 
              id="primerapellido" 
              name="primerapellido" 
              value={primerapellido}
              onChange={cambiarprimerapellido}
              ></input>
            </Row>
            <Row>   
              <Form.Label>Segundo Apellido:</Form.Label>
              <input 
              type="text" 
              id="segundoapellido" 
              name="segundoapellido" 
              value={segundoapellido}
              onChange={cambiarsegundoapellido}
              ></input>
            </Row>
            <Row> 
              <Form.Label>Nombre de usuario:</Form.Label>
              <input 
              type="text" 
              id="segundoapellido" 
              name="segundoapellido" 
              value={usuario}
              onChange={cambiarusuario}
              ></input>
            </Row>
            <Row> 
              <Form.Label>Contraseña:</Form.Label>
              <input 
              type="text" 
              id="contraseña" 
              name="contraseña" 
              value={contra}
              onChange={cambiarcontra}
              ></input>
            </Row>
            <Row> 
              <Form.Label>Confirmar Contraseña:</Form.Label>
              <input 
              type="text" 
              id="confirmarcontraseña" 
              name="confirmarcontraseña" 
              value={confcontra}
              onChange={cambiarconfcontra}
              ></input>
            </Row>
          </CardBody> 
          <CardFooter>
            <Button onClick={guardarClick}>Guardar</Button>
          </CardFooter>
        </Card>
      </Form>
    );
}
export default FormTwo;