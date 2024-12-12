import React, {useState} from "react";
import FormularioRegistro from './FormularioRegistro';
import { useNavigate } from "react-router-dom";
const usuarios = [
    {nombreUsuario: 'usuario1', contrasena: 'contraseña1'},
    {nombreUsuario: 'usuario2', contrasena: 'contraseña2'},
    {nombreUsuario: 'usuario3', contrasena: 'contraseña3'},
    {nombreUsuario: 'usuario4', contrasena: 'contraseña4'},
    {nombreUsuario: 'usuario5', contrasena: 'contraseña5'}
];

const Login = () => {
    const navigate = useNavigate();
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarRegistro, setMostrarRegistro] = useState(false);
    const [intentos, setIntentos] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
        );
        if (usuarioEncontrado) {
            navigate("/");
            alert(`¡Bienvenido, ${usuarioEncontrado.nombreUsuario}!`);
            
        } else {
            setIntentos(intentos+1);

            if (intentos < 3) {
                alert(`Intento ${intentos + 1}: El usuario y/o contraseña no existe. Por favor, intenta de nuevo.`);
            } else {
                alert('Has alcanzado el máximo de intentos permitidos. Por favor, completa el formulario de registro.');
                setMostrarRegistro(true);
            }
        }
    };

   
    return(
        <div className="contenedor-Formulario-2">
            <div className="formulario input">
           {!mostrarRegistro?(
                <form onSubmit={handleSubmit}>
                    <div>
                       <h1>Iniciar Sesión</h1>
                       <br />
                    </div>
                    <div className="form-group">
                        <label htmlFor="iusuario">Nombre de usuario</label>
                        <input
                        type="text"
                        className="form-control"
                        id="iusuario"
                        name="nombreUsuario"
                        placeholder="Ingrese nombre de usuario"
                        value={nombreUsuario}
                        onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipassword">Contraseña</label>
                        <input
                        type="password"
                        className="form-control"
                        id="ipassword"
                        name="contraseña"
                        placeholder="Ingrese contraseña"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-enviar">
                        Ingresar
                    </button>
                </form>
           ): (
            <FormularioRegistro/>
           )}
           </div>
        </div>
    );
}

export default Login;