import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import foto from '../assets/imagenes/FOTO.png';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Datos de Estudiante
      </Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ textAlign: 'center' }}>
      <img
        src={foto}
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' ,borderRadius:'7%'}}
        alt="Foto de perfil"
      />
      <h4><span style={{ fontWeight: 'bold' }}>Apellido Paterno:</span> Guachalla</h4>
      <h4><span style={{ fontWeight: 'bold' }}>Apellido Materno:</span> Aguirre</h4>
      <h4><span style={{ fontWeight: 'bold' }}>Nombres:</span> Rodrigo Joel</h4>
      <h4><span style={{ fontWeight: 'bold' }}>CI:</span> 9875866</h4>
      <h4><span style={{ fontWeight: 'bold' }}>RU:</span> 1815295</h4>
      
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Cerrar</Button>
    </Modal.Footer>
  </Modal>
  );
}

export default function Creditos() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className= "info" variant="dark" onClick={() => setModalShow(true)}>
        DATOS PERSONALES
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}