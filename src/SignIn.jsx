
import React from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom';

function SignIn(){

    const navigate = useNavigate();

return(<>
<div className='SignInBackground'>
<h1>INICIE SESIÓN</h1>
<h3>Ingrese su información para iniciar sesión</h3>

<div>
    <input placeholder='Ingrese su username'></input>
</div>

<div>
    <input placeholder='Ingrese su E-mail'></input>
</div>

<div>
    <input type='Password' placeholder='Ingrese su clave'></input>
</div>

<div>
    <button onClick={() => navigate('/MainView')}>Inicie Sesión</button>
</div>
</div>

</>)

}

export default SignIn