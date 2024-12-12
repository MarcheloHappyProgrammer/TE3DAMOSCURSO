import React from "react";
import '../estilos/contactanos.css';
import {useForm} from "react-hook-form";

export default function Formulario(){
    const {register, reset,formState: {errors}, handleSubmit} = useForm(); 
    const enviarFormulario = (datos) => {
        reset();
        console.log(datos);
        alert('Nos comunicaremos contigo lo antes posible')
    }
    return (
      <div className="contenedor-Formulario">
        <h1>Contáctanos</h1>
        <br />
        <main className="cuerpo-formulario">
          <form
            onSubmit={handleSubmit(enviarFormulario)}
            className="formulario"
          >
            <div>
              <input
                type="text"
                placeholder="Nombres*"
                {...register("nombres", {
                  required: true,
                })}
              />
              {errors.nombres?.type === 'required' && <p className="mensaje-required">El campo nombre es requerido</p>}
            </div>
            <div className="col-2">
              <input
                type="text"
                placeholder="Apellido Paterno*"
                {...register("apellidoPaterno", {
                    required: true,
                })}
              />
              <input
                type="text"
                placeholder="Apellido Materno"
                {...register("apellidoMaterno", {
                    required: true,
                })}
              />
            </div>
            {errors.apellidoMaterno?.type  === 'required' && <p>El campo apellido Materno es requerido</p>}
            {errors.apellidoPaterno?.type  === 'required' && <p className="mensaje-required">El campo apellido Paterno es requerido</p>}
            <div>
              <input type="text" placeholder="E-mail*" {...register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                {errors.email?.type === 'required' && <p>El campo de E-mail es obligatorio</p>}
                {errors.email?.type === 'pattern' && <p>El formato del E-mail  es incorrecto</p>}
            </div>
            <div className="col-2">
              <input type="text" placeholder="Dni*" {...register("dni", {
                    required: true,
                    pattern: /^\d{8}(?:[-\s]\d{4})?$/
                })} />
              <input
                type="text"
                placeholder="Teléfono/Celular*"
                {...register("celular", {
                    required: true,
                    pattern: /^9\d{8}$/
                })}
              />
            </div>
            {errors.dni?.type === 'pattern' && <p>Dni no válido</p>}
            {errors.celular?.type === 'pattern' && <p>Celular no válido</p>}
            {errors.dni?.type === 'required' && <p>El campo dni es requerido</p>}
            {errors.celular?.type === 'required' && <p>El campo celular es requerido</p>}
            <input type="submit" value="Enviar" className="btn-enviar" />
          </form>
        </main>
      </div>
    );
}