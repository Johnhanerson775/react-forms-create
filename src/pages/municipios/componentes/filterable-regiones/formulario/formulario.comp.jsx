import React, { useState } from 'react';

import './formulario.style.css'

const Formulario = (props) => {
    
    const [cars, setCars] = useState('');
    const [name, setName] = useState('');
    const [modelo, setModelo] = useState(0);
    const [precio, setPrecio] = useState(0);
  
    const addCar = (event) => {
        event.preventDefault();
       
        const newProduct = {
            cars:cars,
            id: name,
            name: name,
            modelo:Number(modelo),
            precio: Number(precio),
            
           };
           props.onAddCar(newProduct,cars);
        
    }
    return (
        <table className="formulario-container">
        <div >
       <th> compraventa carros </th>
        <form>
      
      
      
       <tr>
               <td>
             TypeCars <select value={cars} onChange={(event)=>{
                   setCars(event.target.value);
                    }}
       >
              <option value="c1">Automovil</option>
              <option value="c2">Camioneta</option> 
              <option value="c3">Campero</option> 
       </select>
               </td>

       </tr>
       
            
       <tr>
               <td>
                  Marca <input type="text"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value);
                    }}
                   />
               </td>
       </tr>

           
 <tr>
       <td>
            Modelo <input type="number"  value={modelo} onChange={(event)=>{
                      setModelo(event.target.value);
                      
                      
                    }}
                   />
               </td>
       </tr>
       <tr>
       <td>
            Precio <input type="number"  value={precio} onChange={(event)=>{
                      setPrecio(event.target.value);
                      
                      
                    }}
                   />
               </td>
       </tr>
           
      
     
          
           <tr>
                <td>
                     <button
                     onClick={addCar}
                     >
                         Añadir Carro
                     </button>
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default Formulario;