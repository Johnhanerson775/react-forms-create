import './filterable-motos.style.css';

import TablaMoto from './tabla-region/tabla-moto.com';

import Formulario2 from './formulario2/formulario2.comp';
const FilterableMotos = (props) => {
  
    return (
        
        <div className="filterable-motos-container">
  
           
             <TablaMoto
             motoList={props.motoList}
            />
           
           
           
            <Formulario2
            onAddMoto={props.onAddMoto}
            />
         
      </div>
     
    );
}
export default FilterableMotos;