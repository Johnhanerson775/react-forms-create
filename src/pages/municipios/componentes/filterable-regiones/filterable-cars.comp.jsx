import React from 'react';
import './filterable-cars.style.css';
import TablaCars from './tabla-region/tabla-cars.com';

import Formulario from './formulario/formulario.comp';

const FilterableCars = (props) => {
  
    return (
        
        <div className="filterable-cars-container">
  
            <TablaCars
             carList={props.carList}
             />
            
           
           
            <Formulario
            onAddCar={props.onAddCar}
            />
            
      </div>
     
    );
}
export default FilterableCars;