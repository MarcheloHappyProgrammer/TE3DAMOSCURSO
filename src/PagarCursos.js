import React, { useContext } from "react";
import { carritoContext } from "./StateCarrito";
import './estilos/pagar-cursos.css';
import {useForm} from "react-hook-form";

export default function PagarCursos(){
    const {register, reset,formState: {errors}, handleSubmit} = useForm(); 
    const {tarjeta, total, vaciarCarrito, comprarCurso} = useContext(carritoContext);
    function enviarDatos(datos){
        comprarCurso(tarjeta);
        vaciarCarrito();
        console.log(datos);
        alert('Compra realizada con éxito');
        reset();
    }
    return(
        <div className="cuerpo-boleta">
            <h1>Confirma tu compra</h1>
            <main className="contenido-boleta">
            {tarjeta.map((item) => <div className="productos-boleta">
                <img src={item.imagen} alt={item.nombre} />
                <h2>{item.nombre}</h2>
                <p>{item.porcentajeDescuento} % de descuento</p>
                <p className="precio"><del>S/ {item.precioNormal} </del><br />S/ {(item.precioNormal * item.porcentajeDescuento/100).toFixed(2)}</p>
            </div> )}
            </main>
            <hr />
            <div className="mostrar-total">
                <div>Total : </div>
                <div>{total.toFixed(2)}</div>
            </div>
            <form onSubmit={handleSubmit(enviarDatos)}>
                <div className="contenido-form">
                    <label>Número de tarjeta: </label>
                    <input type="text" {...register("numeroTarjeta", {
                        required: true,
                        pattern: /^(?:(\d{4}\s?){4}|(\d{4,6}\s?){3})$/
                    })} className="in-tarjeta"/>
                    <label className="contraseña">Contraseña: </label>
                    <input type="password" {...register("contraseñaTarjeta", {
                        required: true,
                        pattern: /^\d{4}$/,
                    })} className="in-contraseña"/>
                    {errors.numeroTarjeta?.type === 'required' && <p>Debes ingresar un número de tarjeta</p>}
                {errors.numeroTarjeta?.type === 'pattern' && <p>Tarjeta no válida</p>}
                {errors.contraseñaTarjeta?.type === 'required' && <p>Contraseña requerida</p>}
                {errors.contraseñaTarjeta?.type === 'pattern' && <p>Contraseña no válida</p>}
                    <input type="submit" value="Comprar" className="btn-confirmar-compra"/>
                </div>
            </form>
        </div>
    )
}