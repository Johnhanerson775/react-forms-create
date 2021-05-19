import React from 'react';
import'./car.style.css';

const Car = (props) => {
    return (
        <table className="car-container">
           
            
         
           
            <tr>
       <td className="izq">{props.datos.name}</td>
       <td className="centro">{props.datos.modelo}</td>
       <td className="derecha">{props.datos.precio}</td>
   </tr>
   
         
         
        </table>
    
 );
}
export default Car ;  