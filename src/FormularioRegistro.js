import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function FormularioRegistro(){
    const [tipos,setTipos] = useState('');
    const navigate = useNavigate();
    const [registrado,setRegistrado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

    
        const usuario = event.target.usuario.value;
        const contraseña = event.target.contraseña.value;
        const contraseñaV = event.target.contraseñaV.value;
        const tipo = event.target.tipos.value;
        const dni = event.target.dni.value;
        const correo = event.target.icorreo.value;
        const telefono = event.target.telefono.value;
        const tos = event.target.tos.checked;

        if(!/^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{8,}$/.test(usuario)){
            alert('El usuario debe tener al menos 8 caracteres y la primera letra mayúscula.');
            return;
        }

        if(!/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(contraseña)){
            alert('La contraseña debe tener al menos 8 caracteres, al menos una letra mayúscula y al menos un carácter especial.');
            return;
        }

        if(contraseña !==contraseñaV){
            alert('Las contraseñas no coinciden.');
            return;
        }

        if((tipo === '1' && !/^\d{8}$/.test(dni)) || (tipo === '2' && !/^[w\d]{12}$/.test(dni))){
            alert('El DNI debe tener 8 digitos y el CE 12 caracteres alfanumericos');
            return;
        }
        
        if(!/\S+@\S+\.\S+/.test(correo)){
            alert('Ingrese un correo electronico valido.');
            return;
        }
        
        if((telefono.length !== 7 && telefono.length !== 9) || (telefono.length === 7 && !/^[3456]/.test(telefono)) || (telefono.length === 9 && !/^9/.test(telefono))){
          alert('El telefono debe tener 7 digitos y comenzar con 3,4,5 o 6, o tener 9 digitos y comenzar con 9.');
          return;
      }

        if(!tos){
            alert('Acepta los terminos y condiciones del servicio.')
        }

        alert('Gracias por registrarte');
        setRegistrado(true);
    };

    //Renderizar
    return (
        <div>
          {registrado ? (
            <Login /> 
          ) : (
            <form onSubmit={handleSubmit}>
               <div>
                       <h1>Registrate</h1>
                       <br />
                    </div>
              <div className="form-group">
                <label htmlFor="iusuario">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="iusuario"
                  name="usuario"
                  placeholder="Ingrese usuario"
                />
              </div>
              <div className="form-group">
                <label htmlFor="icontraseña">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="icontraseña"
                  name="contraseña"
                  placeholder="Ingrese contraseña"
                />
              </div>
              <div className="form-group">
                <label htmlFor="icontrasenaV">Repita contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="icontraseñaV"
                  name="contraseñaV"
                  placeholder="Repita contraseña"
                />
              </div>
              <div className="form-group">
                <label htmlFor="itipo">Tipo de documento</label>
                <select
                  className="form-select"
                  id="itipo"
                  name="tipos"
                  value={tipos}
                  onChange={(e) => setTipos(e.target.value)} 
                >
                  <option value="1">DNI</option>
                  <option value="2">CE</option>              
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="idni">Número de documento </label>
                <input
                  type="text"
                  className="form-control"
                  id="idni"
                  name="dni"
                  placeholder="Ingrese DNI"
                />
              </div>
              <div className="form-group">
                <label htmlFor="icorreo">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  id="icorreo"
                  name="icorreo"
                  placeholder="Ingrese correo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="itelefono">Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  id="itelefono"
                  name="telefono"
                  placeholder="Ingrese telefono (7 a 9 digi­tos)"
                />
              </div>
              
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="itos" name="tos" />
                <label htmlFor="itos" className="form-check-label">
                  Acepto Terminos y condiciones del servicio
                </label>
              </div>
              <button type="submit" className="btn-enviar">
                Registrar
              </button>
            </form>
          )}
        </div>
      );
}

export default FormularioRegistro;