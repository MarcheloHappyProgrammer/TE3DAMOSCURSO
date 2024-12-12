import React from "react";
import { useState } from "react";

const textos = [
    {nombre : 'MISION' , texto : 'La misión de una empresa que brinda cursos online es ofrecer una educación de calidad, accesible y flexible a todos los interesados en aprender y desarrollar sus competencias profesionales y personales. Mediante una plataforma virtual, la empresa facilita el acceso a contenidos actualizados, metodologías innovadoras y docentes expertos en diversas áreas del conocimiento. Así, la empresa contribuye al desarrollo social, económico y cultural de sus estudiantes y de la sociedad en general.'} ,
    {nombre : 'VISION' , texto : 'Nuestra empresa tiene la visión de ser líder en el mercado de la educación online, ofreciendo cursos de calidad, innovadores y accesibles para todos. Queremos contribuir al desarrollo profesional y personal de nuestros alumnos, brindándoles las herramientas y habilidades necesarias para enfrentar los desafíos del siglo XXI. Nuestra visión se basa en los valores de la excelencia, la ética, la inclusión y la pasión por el aprendizaje.'},
    {nombre : 'VALORES' , texto : 'Los valores de una empresa que brinda cursos online son fundamentales para garantizar la calidad de sus servicios y la satisfacción de sus clientes. Algunos de los valores que pueden orientar el trabajo de una empresa de este tipo son: Compromiso - Innovación - Responsabilidad - Respeto - Excelencia'}
]

export default function MisionVision(){
    const [item, setItem] = useState(0);
    function seleccionar(index){
        const lista = document.getElementsByClassName('botonSobreNosotros');
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];
            element.classList.remove('seleccionado');
        }
        lista[index].classList.add('seleccionado');
    }
    return(
        <section className="section-mi-vi">
            <div className="mision-vision">
                <ul>
                    <li><button onClick={() => (setItem(0), seleccionar(0))} className="botonSobreNosotros seleccionado">{textos[0].nombre}</button></li>
                    <li><button onClick={() => (setItem(1), seleccionar(1))} className="botonSobreNosotros">{textos[1].nombre}</button></li>
                    <li><button onClick={() => (setItem(2) , seleccionar(2))} className="botonSobreNosotros">{textos[2].nombre}</button></li>
                </ul>
            </div>
            <div className="img-mi-vi"></div>
            <div className="text-mi-vi">
                {
                    textos[item].texto
                }
            </div>
        </section>
    );
}
