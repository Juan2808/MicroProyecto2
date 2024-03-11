
import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';

function Register(){
const navigate = useNavigate();



return(<>
<div className='RegisterBackground'>
<h1>REGISTRO</h1>
<h3>Bienvenido! llene el siguiente formulario para crear su Cuenta</h3>
<div>
    <input placeholder='Ingrese su nombre'></input>
</div>

<div>
    <input placeholder='Ingrese su apellido'></input>
</div>

<div>
    <input placeholder='Elija un username'></input>
</div>

<div>
    <input placeholder='Ingrese su E-mail'></input>
</div>

<div>
    <input type='Password' placeholder='Ingrese su clave'></input>
</div>

<div></div>
<label for="Dropdown">Elige tu videojuego favorito:</label>
<select id="Dropdown" name="options">
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
  <option value="opcion3">Opción 3</option>
  <option value="opcion4">Opción 4</option>
</select>


<div>
    <button onClick={() => navigate('/SignIn')}>Crear Cuenta</button>
</div>
</div>


</>)

}

export default Register