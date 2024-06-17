import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function Contactos() {
  return (
    <Form className="dark-background">
    <Row className="mb-3" variant='dark' expand='lg'>
    <Form.Group as={Col} controlId="formGridPassword">

      <Form.Label>Nombre</Form.Label>
      <Form.Control placeholder="Ej. Juan Perez" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
      </Form.Group>


      
      

    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Empresa</Form.Label>
      <Form.Control placeholder="Google, Facebook, Mindgames, ..." />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Direccion</Form.Label>
      <Form.Control placeholder="Zona -- calle --" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Pais</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Argentina</option>
          <option>Bolivia</option>
          <option>Colombia</option>
          <option>Dinamarca</option>
          <option>Mexico</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Edad</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Estoy de acuerdo" />
    </Form.Group>

    <Button variant="dark" type="submit">
      Vamos!!
    </Button>
  </Form>
  )
}
