import React from "react";
import './estilos/estilos-pagina-planes/planes.css';
import { FaCheckCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const beneficiosPlanEstandar = ['Acceso a más de 300 cursos' , 'Acompañamiento del equipo comercial'];
const beneficiosPlanEquipos = ['Acceso a más de 300 cursos' , 'Acompañamiento del equipo comercial', 'Certificados co-brandeados'];
const beneficiosPlanCorporativo = ['Acceso a más de 300 cursos', 'Acompañamiento del equipo comercial' , 'Certificados co-brandeados', 'Acceso a Dashboard de métricas', 'Diseño a Rutas de Aprendizaje a medida','Descuentos por volumen']
const planes = [
    {nombre:'Plan Estándar', maxpersonas:'5',precio:'39.90' , beneficios : beneficiosPlanEstandar, clase:'estandar'},
    {nombre:'Plan Equipos', maxpersonas:'13',precio:'30.90' , beneficios : beneficiosPlanEquipos , clase:'equipos'},
]



export default function Planes() {
    return(
        <div className="contenedor-planes">
            <section className="info-planes">
                <Titulo />
                <p>Estos son los planes que tenemos para ti y tu compañia</p><br/>
                <hr />
            </section>
            <section className="planes">
                {planes.map((plan)=>
                    <Plan nombre={plan.nombre} maxpersonas={plan.maxpersonas} precio={plan.precio} beneficiosplan={plan.beneficios} clase={plan.clase}/>
                )}
                <Corporativo beneficiosplan={beneficiosPlanCorporativo} clase='corporativo'/>
            </section>
        </div>
    )
}

function Titulo(){
    return(
        <h1>PLANES PERSONALIZADOS QUE SE AJUSTAN DE MANERA GRUPAL O EMPRESA</h1>
    );
}
function Plan({nombre,maxpersonas,precio , beneficiosplan, clase}){
    return(
        <article className={clase + ' plan'}>
            <h2>{nombre}</h2>
            <p>Máximo de {maxpersonas} personas</p><br/>
            <hr/><br/>
            <p>Desde <div className="precio">S/{precio}</div> x usuario al mes</p>
            <ul className="lista-beneficios">
                {beneficiosplan.map((item)=><li><FaCheckCircle />{item}</li>)}
            </ul>
            <Link className="btn-contactanos" to="/TE3DAMOSCURSO/contactanos">
                Contáctanos
            </Link>
        </article>
    );
}
function Corporativo({beneficiosplan, clase}){
    return(
        <article className={clase + ' plan'}>
            <h2>Planes Corporativos</h2>
            <hr/><br/>
            <p>Si tienes más de 10 colaboradores, escríbenos y haremos un plan personalizado a tu medida</p><br/>
            <ul className="lista-beneficios">
                {beneficiosplan.map((item)=><li><FaCheckCircle />{item}</li>)}
            </ul>
            <Link className="btn-contactanos" to="/TE3DAMOSCURSO/contactanos">
                Contáctanos
            </Link>
        </article>
    );
}