import React from "react";
import { useState , useContext } from "react";
import imagenCursos from './imagenes/imagenes-cursos/imagen-cursos.jpg';
import './estilos/estilos-pagina-cursos/pagina-cursos.css'
import { cursosdata } from "./Objetos/CursosData";
import { carritoContext } from "./StateCarrito";
import { FaCartPlus } from "react-icons/fa";

export default function Cursos(){
    const {agregarCurso} = useContext(carritoContext); 
    const [filtros , establecerFiltros] = useState('todos');
    const filtrarCursos = (cursos) => {
        return cursos.filter(cursos =>{
            return (
                filtros === 'todos' ||
                cursos.tipo === filtros
            )
        })
    } 
    const listaDeCursos = filtrarCursos(cursosdata);
    function itemseleccionado(event) { 
        establecerFiltros(event.target.value);
    }
    return (
      <div className="contenedor-cursos">
        <section className="section-cabecera">
          <div>
            <Titulo />
            <br />
            <Descripcion />
            <select
              name="categoria-cursos"
              className="categoria-cursos"
              onChange={itemseleccionado}
            >
              <option value="todos">Todas las categorias</option>
              <option value="Desarrollo-web">Desarrollo web</option>
              <option value="Desarrollo-movil">Desarrollo móvil</option>
              <option value="Programación">Programación</option>
            </select>
          </div>
          <img src={imagenCursos} alt="img-cursos" className="img-cursos" />
        </section>
        <div className="cursos">
          {listaDeCursos.map((curso) => (
            <div className="curso">
              <img
                src={curso.imagen}
                alt={curso.nombre}
                className="img-curso"
              />
              <div className="contenido-curso">
                <h3>{curso.nombre}</h3>
                <p>
                  {curso.horasContenido} hr. de contenido +{" "}
                  {curso.horasPractica} hr. de práctica
                  <br />
                  {curso.cantidadVideos} videos
                </p>
                <del>S/ {curso.precioNormal} </del>
                <p className="descuento">Dscto {curso.porcentajeDescuento}%</p>
                <button className="btn-comprar" onClick={() => agregarCurso(curso)}>
                <FaCartPlus className="icono-carrito-curso"/>
                  
                  S/{" "}
                  {(
                    (curso.precioNormal * curso.porcentajeDescuento) /
                    100
                  ).toFixed(2)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

function Titulo(){
    return(
        <h1>CURSOS ONLINE PARA TRABAJAR EN TECNOLOGÍA</h1>
    );
}
function Descripcion(){
    return(
        <p>Elije entre más de 200 cursos online para aprender desde cero a desarrrollar habilidades más demandadas del trabajo en tecnologia<br/><br/>Cursos Online: </p>
    );
}

