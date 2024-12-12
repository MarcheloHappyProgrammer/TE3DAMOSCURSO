import React from "react";
import fotoTrabajador from '../../imagenes/imagenes-sobre-nosotros/foto_Trabajador.jpg';
import fotoPais from '../../imagenes/imagenes-sobre-nosotros/bandera-peru.png';

const integrantes = [
    {nombre:'Trabajador 1',foto:fotoTrabajador,puesto:'Programador web', pais:'Peru', imgPais:fotoPais, frase:'"frase trabajador"'},

    {nombre:'Trabajador 2',foto:fotoTrabajador,puesto:'Diseñadora UI/UX', pais:'Peru', imgPais:fotoPais, frase:'"frase trabajador"'},

    {nombre:'Trabajador 3',foto:fotoTrabajador,puesto:'Coordinador', pais:'Peru', imgPais:fotoPais, frase:'"frase trabajador"'},

    {nombre:'Trabajador 4',foto:fotoTrabajador,puesto:'Web Designer', pais:'Peru', imgPais:fotoPais, frase:'"frase trabajador"'}
];
export default function NuestroEquipo(){
    return(
        <section className="section-nues-equi">
            <Titulo />
            <div className='contenedor-integrantes'>
                {integrantes.map((integrante) =>
                <Integrante foto={integrante.foto} nombre={integrante.nombre} puesto={integrante.puesto} pais={integrante.pais} imgPais={integrante.imgPais} frase={integrante.frase}/>)}
            </div>
        </section>
    );
}

function Titulo(){
    return(
        <h2 className="titulo-nues-equi">NUESTRO EQUIPO</h2>
    );
}
function Integrante({foto,nombre,puesto,pais,imgPais,frase}){
    return(
        <div className="integrante">
            <img src={foto} alt={nombre} className="img-integrante"/>
            <h3>{nombre}</h3>
            <h4 className="puesto-integrante">{puesto}</h4>
            <img src={imgPais} alt={pais} className="img-pais"/><br />
            <i className="frase-integrante">{frase}</i>
        </div>
    );
}