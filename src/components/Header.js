import React from 'react';
const HeaderC = (props) => ( //cuando es un componente funcional se agregan los props como argumentos de la funcion

     <h1 className="text-center">
         {props.title}
     </h1>
 
 );  


export default HeaderC; //se exporta la funcion, para exportar la funcion se usa default, caso contrario se exporta un objeto   