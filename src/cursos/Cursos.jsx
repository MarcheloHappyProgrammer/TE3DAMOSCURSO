import React, { useState } from "react";
import { contenidoCursos } from "../Objetos/ContenidoCursos";
import ReactPlayer from "react-player";
import '../estilos/estilos-contenido-cursos.css';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Curso({id}) {
    const curso = contenidoCursos[id];
    const [indice, setIndice] = useState(0);

    const avanzar = () => {
        if(curso.videos.length - 1>indice){
            setIndice(indice +1);
        }else{
            alert('Este es el último video');
        }
    }
    const retroceder = () => {
        if(indice>0){
            setIndice(indice -1);
        }else{
            alert('Este es el primer video');
        }
    }
    return(
        <div className="cuerpo-contenido-curso">
            <h1>CURSO {curso.nombre}</h1>
            <h2>Video nr. {indice + 1}</h2>
            <ReactPlayer 
                url= {curso.videos[indice]}
                width='100%'
                height='700px'
                controls
                playing
            />
            <div className="avanzar">
            <button onClick={() =>retroceder()}><FaArrowAltCircleLeft /></button>
            <button onClick={() => avanzar()}><FaArrowAltCircleRight /></button>
            </div>
        </div>
    )
}