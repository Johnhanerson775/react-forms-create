import React from 'react';
import'./motos.style.css';


const Motos = (props) => {
    return (
       <div className="motos-container">
          {props.categoryName}
       </div> 
           
    );
}
export default Motos;     
