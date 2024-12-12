import { useContext} from 'react';
import '../estilos/carrito.css';
import { carritoContext } from "../StateCarrito";
import { MdRemoveShoppingCart, MdOutlinePayment, MdDelete } from "react-icons/md";
import { TbShoppingCartCancel } from "react-icons/tb";
import {Link} from 'react-router-dom';
export default function Carrito() {
    const {carritoActivo , setCarritoActivo, tarjeta} = useContext(carritoContext);
    if(tarjeta.length >=1){
        setCarritoActivo(false)
    }
    return(
         <div className="carrito">
            {
                carritoActivo ? (
                    <p>Ningún curso seleccionado <TbShoppingCartCancel className='icono-carrito-vacio'/></p>
                ) : (
                    <>
                    <Contenido />
            <br />
            <hr />
            <Total />
            <Botones />
                    </>
                )
            }
         </div>
    )
}

function Contenido(){
    const {tarjeta, eliminarItem} = useContext(carritoContext);
    return(
        <>
        {tarjeta.map((tarjeta)=>{
            return (
                <div className="curso-item-carrito">
        <img src={tarjeta.imagen} alt={tarjeta.nombre} />
        <h3>{tarjeta.nombre}</h3>
        <p>S/. {(tarjeta.precioNormal * tarjeta.porcentajeDescuento /100).toFixed(2)}</p>
        <button onClick={() => eliminarItem(tarjeta)} className='btn-eliminar-item'><MdDelete /></button>
        </div>
            )
        })}
        </>
    )
}
function Botones(){
    const {vaciarCarrito} = useContext(carritoContext);
    return(
        <div className='btns-carrito'>
            <button onClick={() => vaciarCarrito()} className='btn-vaciar-carrito btn-carrito'>
            Vaciar carrito <MdRemoveShoppingCart />
        </button>
        <Link className='btn-pagar-carrito btn-carrito' to='/TE3DAMOSCURSO/pagarCursos'>
            Ir a pagar <MdOutlinePayment />

        </Link>
        </div>
    )
}
function Total(){
    const {total} = useContext(carritoContext);
    return(
        <div className='Total'>
            <p>TOTAL:</p>
            <div>S/.{total.toFixed(2)}</div>
        </div>
    ) 
}