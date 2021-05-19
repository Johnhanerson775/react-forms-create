import React from 'react';
import'./moto.style.css';

const Moto = (props) => {
    return (
        <table className="moto-container">
           
            
         
           
            <tr>
       <td className="izq">{props.datos.name}</td>
       <td className="centro">{props.datos.modelo}</td>
       <td className="derecha">{props.datos.cilindraje}</td>
   </tr>
   
         
         
        </table>
    
 );
}
export default Moto ;  