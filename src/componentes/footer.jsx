import React from "react";
import { FaFacebookF,FaTwitter,FaInstagram,FaWhatsapp} from 'react-icons/fa';
import '../estilos/footer.css'

const title = ['Verifica el certificado', 'Contáctanos' , 'Legal' , 'Ayuda'];

const iconosRedes =[
    {nombre : 'facebook', icono : <FaFacebookF className='icono-footer'/>, link: '#'},
    {nombre : 'twitter', icono : <FaTwitter className='icono-footer'/>, link: '#'},
    {nombre : 'instagram', icono : <FaInstagram className='icono-footer'/>, link: '#'}
]
const legal = [
    {nombre : 'Términos y condiciones', link : '#'},
    {nombre : 'Política de cookies', link : '#'},
    {nombre : 'Libro de reclamaciones', link : '#'}
]
const ayuda = [
    {nombre : 'Soporte' , link : '#'},
    {nombre : 'Preguntas frecuentes', link: '#'}
]

export default function Footer(){
    return(
        <footer>
            <BodyFooter />
            <hr />
            <p className="copyright">&#169; 2023 t3damoscurso. Inc.</p>
        </footer>
    );
}
function BodyFooter(){
    return(
        <div className='body-footer'>
            <VerificaCertificado />
            <Contáctanos />
            <Legal />
            <Ayuda />
        </div>
    );
}
function VerificaCertificado(){
    return(
        <div className="div-verifica">
            <FooterTitles title={title[0]}/>
            <p>Valida el certificado t3damoscurso <br/> ingresando el código único</p>
            <a href="#" >
                <div className='button-verifica-certificado'>
                    Verificar Certificado
                </div>
            </a>
        </div>
    );
}
function Contáctanos(){
    return(
        <div>
            <FooterTitles title={title[1]} />
            <div>
                {iconosRedes.map((icono,index) =>(
                    <a href={icono.link} key={index}  target="_blank">
                        {icono.icono}
                    </a>
                ))}
            </div>
            <a href="#">
                <FaWhatsapp className='whatsapp'/>
                +51 946-164-131
            </a>
        </div>
    )
}
function Legal(){
    return(
        <div>
            <FooterTitles title={title[2]} />
            {legal.map((item,index)=>(
                <FooterSubtitles subtitle={item.nombre} link={item.link} key={index} />
            ))}
        </div>
    );
}
function Ayuda(){
    return(
        <div>
            <FooterTitles title={title[3]} />
            {ayuda.map((item,index)=>(
                <FooterSubtitles subtitle={item.nombre} link={item.link} key={index} />
            ))}
        </div>
    );
}
function FooterTitles({title}){
    return(
        <h3 className="title-footer">{title}</h3>
    );
}
function FooterSubtitles({subtitle,link}){
    return(
        <a href={link} target="_blank">
            <h3 className="title-footer">
                {subtitle}
            </h3>
        </a>
    );
}