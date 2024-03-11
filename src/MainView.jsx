import React from 'react'
import './MainView.css'
import { useNavigate } from 'react-router-dom';
import ClubCard from './ClubCard'

function MainView(){

const navigate = useNavigate();


return(<>
<div className='MainViewBackground'>


<h2>Aqui deberian estar las tarjetas de los clubes con un header que permita buscar los distintos juegos</h2>
<h2></h2>

</div>


</>)

}

export default MainView

//Aqui planeo hacer un header donde se puedan buscar juegos y ver 