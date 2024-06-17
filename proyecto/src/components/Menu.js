import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import juego1 from '../assets/imagenes/jg1.png';
import juego2 from '../assets/imagenes/jg2.png';
import juego3 from '../assets/imagenes/jg3.png';
import juego4 from '../assets/imagenes/jg4.png';
import juego5 from '../assets/imagenes/jg5.png';
export default function Menu() {
  return (
  <div className = 'bodyMenu'>
    <Card style={{ width: '18rem', background:'black', color:'white', margin:'15px 15px'}}>
      <Card.Img variant="top" src={juego1} />
      <Card.Body>
        <Card.Title>RagDoll Hit</Card.Title>
        <Card.Text>
        Controla un muñeco de trapo en Ragdoll Hit. Derrota enemigos con puñetazos, patadas, saltos y armas. Usa el entorno a tu favor. Gana monedas para comprar armas y diseños. ¿Serás el campeón?
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item  style={{background:'#B30023 ', color:'white'}}>Cateogoria: Acción</ListGroup.Item>
        <ListGroup.Item style={{background:'#B30023 ', color:'white'}}>Creador: Poki</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" style={{background:'#900002' , color:'white', border:'#900002'}}><a href='https://poki.com/es/g/ragdoll-hit'  style={{color:'white', textDecoration:'none'}}> JUGAR</a></Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem', background:'black', color:'white', margin:'15px 15px'}}>
      <Card.Img variant="top" src={juego2} />
      <Card.Body>
        <Card.Title>Red Ball 4</Card.Title>
        <Card.Text>
        ¡En Red Ball 4, controla una bola roja, evita obstáculos y enemigos, y recoge estrellas en más de 70 niveles para ganar medallas doradas!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item  style={{background:'#B30023 ', color:'white'}}>Cateogoria: Aventura</ListGroup.Item>
        <ListGroup.Item style={{background:'#B30023 ', color:'white'}}>Creador: Yohoho Games</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" style={{background:'#900002' , color:'white', border:'#900002'}}><a href='https://poki.com/es/g/red-ball-4'  style={{color:'white', textDecoration:'none'}}> JUGAR</a></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', background:'black', color:'white', margin:'15px 15px'}}>
      <Card.Img variant="top" src={juego3} />
      <Card.Body>
        <Card.Title>Stupid Zombies</Card.Title>
        <Card.Text>
        ¡Stupid Zombies es un juego de disparos donde enfrentas zombis! Apunta bien y usa balas que rebotan para eliminar a todos. ¡Demuestra tu puntería y acaba con ellos!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item  style={{background:'#B30023 ', color:'white'}}>Cateogoria: Acción</ListGroup.Item>
        <ListGroup.Item style={{background:'#B30023 ', color:'white'}}>Creador: MarketJS</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" style={{background:'#900002' , color:'white', border:'#900002'}}><a href='https://poki.com/es/g/stupid-zombies'  style={{color:'white', textDecoration:'none'}}> JUGAR</a></Button>
      </Card.Body>
    </Card>
 

    <Card style={{ width: '18rem', background:'black', color:'white', margin:'15px 15px'}}>
      <Card.Img variant="top" src={juego4} />
      <Card.Body>
        <Card.Title>Temple Run</Card.Title>
        <Card.Text>
        Temple Run 2 es un juego de correr donde evitas obstáculos y escapas de monstruos. ¡Corre, esquiva y atrapa el ídolo de oro!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item  style={{background:'#B30023 ', color:'white'}}>Cateogoria: Aventura,Exploración</ListGroup.Item>
        <ListGroup.Item style={{background:'#B30023 ', color:'white'}}>Creador: Imangi</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" style={{background:'#900002' , color:'white', border:'#900002'}}><a href='https://poki.com/es/g/temple-run-2'  style={{color:'white', textDecoration:'none'}}> JUGAR</a></Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem', background:'black', color:'white', margin:'15px 15px'}}>
      <Card.Img variant="top" src={juego5} />
      <Card.Body>
        <Card.Title>Stick Defenders</Card.Title>
        <Card.Text>
          Stick Defenders: ¡fusiona unidades para defender la base!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item  style={{background:'#B30023 ', color:'white'}}>Cateogoria: Acción</ListGroup.Item>
        <ListGroup.Item style={{background:'#B30023 ', color:'white'}}>Creador: TinyDobbins</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" style={{background:'#900002' , color:'white', border:'#900002'}}><a href='https://poki.com/es/g/stick-defenders'  style={{color:'white', textDecoration:'none'}}> JUGAR</a></Button>
      </Card.Body>
    </Card>
    


    

    
  </div>
  )
}
