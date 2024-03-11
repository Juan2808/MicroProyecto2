import { useContext } from "react";
import './ClubCard.css'



export default function ClubCard({name,description,videogames}){

return(<>


<div className="card">
<div className="card-content"/>
<h1 className="card-title">Nombre : {name}</h1>
<h3 class>videojuegos :{videogames}</h3>
<p className="card-title">Descripcion: {description} </p>



</div>



</>

); 


}


