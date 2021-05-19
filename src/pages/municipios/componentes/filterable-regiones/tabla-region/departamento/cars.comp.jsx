import React from 'react';
import'./cars.style.css';


const Cars = (props) => {
    return (
       <div className="cars-container">
          {props.categoryName}
       </div> 
           
    );
}
export default Cars;     
