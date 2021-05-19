import React from 'react';
import'./tabla-moto.style.css';
import Motos from './departamento/motos.comp';
import Moto from './municipio/moto.comp';


const TablaMoto = (props) => {
    
 return (
             <table className="tabla-moto-container">
      
                 <div>
             {props.motoList.map((motos,index) =>{
               return(
                <div key={(motos.id)}>
              
            
              <Motos categoryName={motos.name}/>
     <div className="der">Marca    Modelo      Cilindraje  </div> 
           {(motos.motoss).map((datos, indexProduct)=>{
                   return(
                      <div>
                    <Moto
                    key={datos.id} 
                    datos={datos}/>
                  </div>
                  
                 );
                })}



                </div>
                );
              })}
              </div>
            </table>
         );

}
export default TablaMoto;