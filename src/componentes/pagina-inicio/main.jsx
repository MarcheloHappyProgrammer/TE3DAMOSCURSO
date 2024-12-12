import React from "react";
import {Link} from 'react-router-dom';

const cards = [
    {texto: 'VER CURSOS', link: '/TE3DAMOSCURSO/cursos'},
    {texto: 'REGISTRATE AHORA', link: '/TE3DAMOSCURSO/contactanos'},
]
export default function MainPagIn() {
    return (
        <main className="cuerpoInicio">
            <ContenidoMain/>
        </main>
    );
}
function ContenidoMain(){
    return(
        <div className='mensaje-banner'>
            <Titulo/>
            <ConjuntoDeCartas/>
        </div>
    )
}
function Titulo(){
    return(
        <h1 className="titulo-inicio">"NUNCA ES TARDE PARA ESTUDIAR"</h1>
    );
}
function CardMain({texto,link}){
    return(
        <Link to={link}>
            <div className='card-main'>
                {texto}
            </div>
        </Link>
    );
}
function ConjuntoDeCartas(){
    return(
        <div className='contenedor-cards'>
            {cards.map((card,index) =>(
                <CardMain key={index} texto={card.texto} link={card.link}/>
             ))}
        </div>
    );
}