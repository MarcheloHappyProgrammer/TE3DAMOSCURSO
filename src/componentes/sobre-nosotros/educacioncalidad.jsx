import React from "react";
import Estudiantes from '../../imagenes/imagenes-sobre-nosotros/estudiantes_autodidactas.png';
import Profesionales from '../../imagenes/imagenes-sobre-nosotros/profesionales.png';
import Emprendedores from '../../imagenes/imagenes-sobre-nosotros/emprendedores.png';
const informacion = [
    {titulo:'Estudiantes y autodidactas', informacion:'Aprende una nueva tecnología o refuerza tus materias de la universidad o el instituto y asegura tu empleabilidad.', imagen:Estudiantes},
    {titulo:'Profesionales', informacion:'La tecnología cambia demasiado rápido. Mantente actualizado siempre, no seas un profesional obsoleto.', imagen:Profesionales},
    {titulo:'Emprendedores y freelancers', informacion:'Adquiere los conocimientos para que tu emprendimiento despegue y para darle el mejor servicio a tus clientes.', imagen:Emprendedores}
]

export default function EducacionDeCalidad(){
    return(
        <section className="section-edu-cal">
            <TituloEducacion />
            <div className="contenedor-info">
                {informacion.map((info)=>
                    <Item imagen={info.imagen} titulo={info.titulo} informacion={info.informacion}/>
                )}
            </div>
        </section>
    );
}

function TituloEducacion(){
    return (
        <h2 className="titulo-edu-cal">T3DAMOSCURSO es educación de calidad para todos los perfiles</h2>
    );
}
function Item({imagen,titulo,informacion}){
    return(
        <div className="item-edu-cal">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{informacion}</p>
        </div>
    );
}