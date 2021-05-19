import React from 'react';
import'./tabla-cars.style.css';
import Cars from './departamento/cars.comp';
import Car from './municipio/car.comp';


const TablaCars = (props) => {
    
 return (
             <table className="tabla-cars-container">
      
                 <div>
             {props.carList.map((cars,index) =>{
               return(
                <div key={(cars.id)}>
              
            
              <Cars categoryName={cars.name}/>
     <div className="der">Marca    Modelo      precio  </div> 
           {(cars.carss).map((datos, indexProduct)=>{
                   return(
                      <div>
                    <Car
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
export default TablaCars;