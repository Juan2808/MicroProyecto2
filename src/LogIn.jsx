import React from 'react'
import './LogIn.css'
import { useNavigate } from 'react-router-dom';

function LogIn(){

const navigate = useNavigate();


return(<>
<div className='loginBackground'>
<h1>BIENVENIDO AL CLUB</h1>

<div>
    <button onClick={() => navigate('/SignIn')} >Inciar Sesion</button>
</div>

<div>
    <h3>Usuario nuevo?</h3>
    <button onClick={() => navigate('/Register')}>Registrarse</button>
</div>
</div>


</>)

}

export default LogIn