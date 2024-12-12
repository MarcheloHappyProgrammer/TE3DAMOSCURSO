import FundaPython from "../imagenes/imagenes-cursos/python-curso-fundamentos.jpg";
import DatosLinePython from "../imagenes/imagenes-cursos/python-curso-datos-lineales.jpg"
import HtmlYCss from "../imagenes/imagenes-cursos/html-css-curso.jpg"
import JsDom from "../imagenes/imagenes-cursos/javascript-curso.jpg"
import Postgre from "../imagenes/imagenes-cursos/postgresql-curso.png"
import Kotlin from "../imagenes/imagenes-cursos/kotlin-curso.jpg"
import Php from "../imagenes/imagenes-cursos/php-curso.jpg"
import C from "../imagenes/imagenes-cursos/c-curso.jpeg"

export const cursosdata = [
  {
    id: 0,
    nombre: "FUNDAMENTOS DE PYTHON",
    imagen: FundaPython,
    horasContenido: 5,
    horasPractica: 12,
    cantidadVideos: 37,
    precioNormal: 68.9,
    porcentajeDescuento: 42,
    tipo: "Programación",
  },
  {
    id: 1,
    nombre: "ESTRUCTURAS DE DATOS LINEALES CON PYTHON",
    imagen: DatosLinePython,
    horasContenido: 4,
    horasPractica: 8,
    cantidadVideos: 30,
    precioNormal: 60,
    porcentajeDescuento: 50,
    tipo: "Programación",
  },
  {
    id: 2,
    nombre: "HTML Y CSS",
    imagen: HtmlYCss,
    horasContenido: 4,
    horasPractica: 8,
    cantidadVideos: 30,
    precioNormal: 100,
    porcentajeDescuento: 50,
    tipo: "Desarrollo-web",
  },
  {
    id: 3,
    nombre: "JAVASCRIPT EN EL DOM",
    imagen: JsDom,
    horasContenido: 4,
    horasPractica: 8,
    cantidadVideos: 30,
    precioNormal: 100,
    porcentajeDescuento: 50,
    tipo: "Desarrollo-web",
  },
  {
    id: 4,
    nombre: "POSTGRESQL",
    imagen: Postgre,
    horasContenido: 8,
    horasPractica: 15,
    cantidadVideos: 30,
    precioNormal: 138.5,
    porcentajeDescuento: 35,
    tipo: "Base-de-datos",
  },
  {
    id: 5,
    nombre: "KOTLIN PARA SCRATCH",
    imagen: Kotlin,
    horasContenido: 7,
    horasPractica: 8,
    cantidadVideos: 25,
    precioNormal: 133.5,
    porcentajeDescuento: 70,
    tipo: "Desarrollo-movil",
  },
  {
    id: 6,
    nombre: "BÁSICO DE PHP",
    imagen: Php,
    horasContenido: 6,
    horasPractica: 7,
    cantidadVideos: 23,
    precioNormal: 83.5,
    porcentajeDescuento: 40,
    tipo: "Programación",
  },
  {
    id: 7,
    nombre: "BÁSICO DE C",
    imagen: C,
    horasContenido: 7,
    horasPractica: 9,
    cantidadVideos: 20,
    precioNormal: 171.4,
    porcentajeDescuento: 65,
    tipo: "Programación",
  },
];
