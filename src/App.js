import React from 'react'
import { useState } from 'react';
import Logo from './imagenes/Logo.jpeg'
import './estilos/header.css'
import './estilos/principal.css'
import { Icon } from './componentes/icon';
import { faMagnifyingGlass , faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {Link, BrowserRouter, Route , Routes} from 'react-router-dom';
import './General.css';
import Inicio from './Inicio';
import SobreNosotros from './SobreNosotros';
import Footer from './componentes/footer';
import Cursos from './Cursos.js';
import Planes from './Planes';
import Cabecera from './Cabecera.js';
import Contacto from './Contacto.js';
import Carrito from './componentes/carrito.jsx';
import { EstadoCarrito } from './StateCarrito.jsx';
import PagarCursos from './PagarCursos.js';
import Formulario from './componentes/contactanos.jsx';

import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const paginas = [
  {texto: 'INICIO' , link:'/TE3DAMOSCURSO/'},
  {texto: 'SOBRE NOSOTROS' , link:'/TE3DAMOSCURSO/sobreNosotros'},
  {texto: 'CURSOS' , link:'/TE3DAMOSCURSO/cursos'},
  {texto: 'PLANES' , link:'/TE3DAMOSCURSO/planes'},
]

const iconosRedes = [
  { nombre: 'facebook', icono: faFacebookF, link: '#' },
  { nombre: 'twitter', icono: faTwitter, link: '#' },
  { nombre: 'instagram', icono: faInstagram, link: '#' },
  { nombre: 'whatsapp', icono: faWhatsapp, link: '#' },
];

export default function App(){
  const [verCarrito, setVerCarrito] = useState(false);
  const verCarro = () =>{
    setVerCarrito(!verCarrito);
  }
    return(
      <BrowserRouter>
        <div className='principal'>
          <Cabecera/>
          <Contacto/>
          <RedesSociales/>
        </div>
        <EstadoCarrito>
        <header>
          <div className='header-sec'>
            <ImagenLogo/>
          </div>
          <div className='header-sec'>
            <ListaItems/>
          </div> 
          <div className='header-sec'>
            <button onClick={verCarro} className='item button-header'><Icon css='icono' icon={faCartShopping}/></button>
          </div>
        </header>
        {verCarrito ?  <Carrito /> : null}
        <div className='vinculos-secciones'>
        <Routes>
          <Route path='/TE3DAMOSCURSO/' element={<Inicio />}/>
          <Route path='/TE3DAMOSCURSO/sobreNosotros' element={<SobreNosotros />}/>
          <Route path='/TE3DAMOSCURSO/cursos' element={<Cursos />}/>
          <Route path='/TE3DAMOSCURSO/planes' element={<Planes />}/>
          <Route path='/TE3DAMOSCURSO/pagarCursos' element={<PagarCursos />}/>
          <Route path='/TE3DAMOSCURSO/contactanos' element={<Formulario />}/>
        </Routes>

        </div>
        <Footer />
        </EstadoCarrito>
      </BrowserRouter>
      
    );
}

const ListaItems = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="menu-container">
      <button className="menu-icon" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`lista-items ${menuAbierto ? "activo" : ""}`}>
        {paginas.map((item, index) => (
          <Link key={index} to={item.link} className="item">
            {item.texto}
          </Link>
        ))}
      </div>
    </div>
  );
};

function ImagenLogo(){
  return(
      <img src={Logo} alt='imagen-logo' className='imagen-logo'/>
  );
}

const RedesSociales = () => {


  const [items,setItems] = useState([]);
  
  useState(()=>{
    
    const menuItems = iconosRedes.map((item,index) =>(
    
      <a
      key={index}
      href={item.link}
      className='item3'
      target="_blank"
      rel=""
      >
        <Icon css={item.nombre + ' icono'} icon={item.icono}/>
        
      </a>
    ));
    setItems(menuItems);
  },[]);

  return(
      <div className="icono-redes">
            <h6>SÍGUENOS: </h6>
            {items}
      </div>
      
    )
}