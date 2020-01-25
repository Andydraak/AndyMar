import React from 'react'
import buttonImg from '../images/add-button.png'
import { Link } from 'react-router-dom'
import'./styles/Button.css'

const Boton =() => (
    <Link to="/Cedulanew">
            <img src= {buttonImg} className="Add-button"/>

        </Link>
)


// function Boton(props){
//     return(
      
//         <Link to="/Cedulanew">
//             <img src= {buttonImg} className="Add-button"/>

//         </Link>
       
//     )
// }

export default Boton