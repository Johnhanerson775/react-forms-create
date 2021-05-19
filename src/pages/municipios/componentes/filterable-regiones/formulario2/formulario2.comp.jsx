import React, { useState } from 'react';

import './formulario2.style.css'

const Formulario2 = (props) => {
    
    const [motos, setMotos] = useState('');
    const [name, setName] = useState('');
    const [modelo, setModelo] = useState(0);
    const [cilindraje, setCilindraje] = useState(0);
    const addMoto = (event) => {
        event.preventDefault();
       
        const newProduct = {
           motos:motos,
            id: name,
            name: name,
            modelo:Number(modelo),
            cilindraje: Number(cilindraje),

           };
           props.onAddMoto(newProduct,motos);
        
    }
    return (
        <table className="formulario2-container">
        <div >
       <th> Compraventa Motos </th>
        <form>
      
      
      
       <tr>
               <td>
               typeMotorcycles <select value={motos} onChange={(event)=>{
                   setMotos(event.target.value);
                    }}
       >
              <option value="c1">cuatrimoto</option>
              <option value="c2">enduro</option> 
              <option value="c3">Cross</option> 
              
       </select>
               </td>

       </tr>
       
            
       <tr>
               <td>
                  Motos <input type="text"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value);
                    }}
                   />
               </td>
       </tr>

           
 
           
       <tr>
               <td>
                  Modelo<input type="number"
                    value={modelo}
                    onChange={(event)=>{
                      setModelo(event.target.value);
                    }}
                   />
               </td>
       </tr>
       <tr>
               <td>
                  Cilindraje<input type="number"
                    value={cilindraje}
                    onChange={(event)=>{
                      setCilindraje(event.target.value);
                    }}
                   />
               </td>
       </tr>
     
          
           <tr>
                <td>
                     <button
                     onClick={addMoto}
                     >
                         Añadir Moto
                     </button>
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default Formulario2;