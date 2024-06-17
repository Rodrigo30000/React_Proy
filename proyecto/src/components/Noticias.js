import React from 'react'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Noticias() {
  return (
    <>
    <br></br>
   <MDBContainer className="py-5 noti">
      <MDBRow className="gx-5">
        <MDBCol md="6" className="mb-4">
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <iframe width="70%" height="250px" src="https://www.youtube.com/embed/Ok_6WW4WxoI" title="FINAL FANTASY XIV: DAWNTRAIL Launch Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
          ¡Nuevo Gameplay Trailer XBOX!
          </span>
          <h4>
            <strong>FINAL FANTASY XIV: DAWNTRAIL Launch Trailer</strong>
          </h4>
          <p className="text-muted letra">
          ¡Echa un vistazo al emocionante trailer de lanzamiento de FINAL FANTASY XIV: DAWNTRAIL! Sumérgete en un mundo de aventuras épicas y peligros inesperados mientras te embarcas en una nueva jornada. Descubre los paisajes impresionantes, los personajes cautivadores y los desafíos que te esperan en este emocionante capítulo de la saga FINAL FANTASY.
          </p>
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>




    <br></br>
    <MDBContainer className="py-5 noti">
      <MDBRow className="gx-5">
        <MDBCol md="6" className="mb-4">
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <div className="video-responsive">
              <iframe
                width="70%"
                height="250px"
                src="https://www.youtube.com/embed/b68WE-eZ-Cc"
                title="Phantom Blade Zero - 'The Blade is Drawn' Gameplay Trailer | PS5 Games"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            ¡Nuevo Gameplay Trailer PS5!
          </span>
          <h4>
            <strong>Phantom Blade Zero - 'The Blade is Drawn' Gameplay Trailer | PS5 Games</strong>
          </h4>
          <p className="text-muted letra">
            ¡Prepárate para la acción con el nuevo trailer de gameplay de Phantom Blade Zero! Experimenta la emoción de la batalla mientras desatas tus habilidades con la espada en este impresionante juego para PS5. ¿Estás listo para enfrentarte a desafíos épicos y dominar el arte de la espada?
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
}

