import React, { useState } from "react";
import { createContext } from "react";
import './estilos/cursos-carrito.css'

export const carritoContext = createContext();

export function EstadoCarrito({children}){
    const [tarjeta, setTarjeta] = useState([]);
    const [total, setTotal] = useState(0);
    const [carritoActivo , setCarritoActivo] = useState(true);
    const [verCarrito, setVerCarrito] = useState(false);
    const [cursoComprado, setCursoComprado] = useState([]);
    const verCarro = () =>{
    setVerCarrito(!verCarrito);
    }
    const comprarCurso = (paquete) => {
        setCursoComprado((prevCursoComprado) => [...prevCursoComprado, ...paquete]);
    }

    const agregarCurso = (curso) => {
        const validarCurso = tarjeta.findIndex(item => item.id === curso.id);
        if(validarCurso >=0){
            alert('El curso ya está agregado al carrito')
        }else{
            if(tarjeta.length<4){
                setTarjeta([...tarjeta, curso]);
            setTotal(
                total + curso.precioNormal * curso.porcentajeDescuento/100
              );
            }else{
                alert('Máximo de 4 cursos por compra')
            }
        }            
    }
    function vaciarCarrito(){
        setTarjeta([]);
        setTotal(0);
        setCarritoActivo(true);
    }
    function eliminarItem(item){
        setTarjeta(tarjeta.filter(curso => curso.nombre != item.nombre))
        setTotal(total - item.precioNormal * item.porcentajeDescuento/100)
        if(tarjeta.length <= 1){
            setCarritoActivo(true)
        }
    }
    return (
        <carritoContext.Provider value={
            {agregarCurso , vaciarCarrito , tarjeta , eliminarItem, total, setTotal,
             carritoActivo , comprarCurso ,setCarritoActivo , verCarro, verCarrito, cursoComprado, setCursoComprado}
        }>
            {children}
        </carritoContext.Provider>
    )
    
}