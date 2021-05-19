import React, {useState} from 'react';

 import FilterableMotos from './componentes/filterable-regiones/filterable-motos.comp';
const MotosPages = () => {

    let motoList = [
      {   
         
          id:"c1",
          name:'enduro',
      
          motoss:[
              {
                   id:"c1p1",
                  name:"KTM",
                  modelo:'1000',
                  cilindraje:'150',
              },
              {
                  id:"c1p2",
                  name:"XTZ",
                  modelo:'1500',
                  cilindraje:'125',
              }
             
              
             ]
          
      },
      {
          id:"c2",
          name:'cross',
          motoss:[
              {
                  id:"c2p1",
                  name:"KX",
                  modelo:'4000',
                  cilindraje:'200',
              },
              {
                  id:"c2p2",
                  name:"RM",
                  modelo:'4500',
                  cilindraje:'250',
              }
              
          ]
      }
     
     
  ];
  const [motoss, setProducts] = useState (motoList);
      return (
          
        
        <div>
             <> 
             <FilterableMotos
             motoList={motoss}
             onAddMoto={(newProductsObj, categoryId)=>{
                 //crear nuevo arreglo de products
                 const newProducts = [];
                 for(let i=0; i<motoss.length; i++){
                     if(motoss[i].id !== categoryId){
                        newProducts.push(motoss[i]);
                     }
                     else{
                        newProducts.push(
                            {
                                ...motoss[i],
                                motoss:[...motoss[i].motoss, newProductsObj]
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
  export default MotosPages;