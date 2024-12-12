import React from "react";
import { Icon } from '../icon';
import {faUser , faClock, faBusinessTime, faCheckToSlot} from "@fortawesome/free-solid-svg-icons";

const cards = [
    {texto: 'Expertos en LATAM',icono:faUser},
    {texto: 'Avanza a tu ritmo',icono:faClock},
    {texto: 'Constante Actualización',icono:faBusinessTime},
    {texto: 'Máxima Calidad',icono:faCheckToSlot}
]

export default function SectionPagIn(){
    return (
        <section className="section-pag-in">
            <ContenidoSection />
        </section>
    );
}
function ContenidoSection(){
    return(
        <div className='contenedor-section'>
            <Titulo/>
            <ConjuntoDeCartas/>
        </div>
    );
}
function CardSection({texto,icono}){
    return(
        <div className='card-section'>
            <Icon css='icono' icon={icono}/><br/>
            {texto}
        </div>
    );
}
function Titulo(){
    return(
        <h2>¿Por qué aprender con nosotros?</h2>
    )
}
function ConjuntoDeCartas(){
    return(
        <div className='contenedor-cards'>
            {cards.map((card,index) =>(
                <CardSection key={index} texto={card.texto} icono={card.icono}/>
            ))}
        </div>
    )
}