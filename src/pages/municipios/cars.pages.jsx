import React, {useState} from 'react';

 import FilterableCars from './componentes/filterable-regiones/filterable-cars.comp';
 
const CarsPages = () => {

  let carList = [
    {   
       
        id:"c1",
        name:'Automovil',
    
        carss:[
            {
                 id:"c1p1",
                name:"aveo",
                modelo:'1999',
                precio:'888888',
            },
            {
                id:"c1p2",
                name:"renault",
                modelo:'1500',
                precio:'450000',
            }
           
            
           ]
        
    },
    {
        id:"c2",
        name:'Camioneta',
        carss:[
            {
                id:"c2p1",
                name:"sendero",
                modelo:'2000',
                precio:'40000',
            },
            {
                id:"c2p2",
                name:"suv",
                modelo:'2001',
                precio:'30000',
            }
            
        ]
    },
    {
        
        id:"c3",
        name:'Campero',
        carss:[
            {
                id:"c3p1",
                name:"trupper",
                modelo:'6500',
                precio:'100000',
            },
            {
                id:"c3p2",
                name:"jeep",
                modelo:'7000',
                precio:'10000'
            }
           
           ]
        
    }
   
];
const [carss, setProducts] = useState (carList);
    return (
        
      
      <div>
           <> 
           <FilterableCars
           carList={carss}
           onAddCar={(newProductsObj, categoryId)=>{
               //crear nuevo arreglo de products
               const newProducts = [];
               for(let i=0; i<carss.length; i++){
                   if(carss[i].id !== categoryId){
                      newProducts.push(carss[i]);
                   }
                   else{
                      newProducts.push(
                          {
                              ...carss[i],
                              carss:[...carss[i].carss, newProductsObj]
                          }
                          );
                   }
               }
               //2.cambiar el arreglo de "products" a traves de la funcion setproducts
               setProducts(newProducts);
               console.log(newProducts);
            
           }}

          
           /> 
           </>
     <div />
         
      </div>
      
      );
}
export default CarsPages;

