import React from 'react';
const FooterC = (props) => ( //cuando es un componente funcional se agregan los props como argumentos de la funcion

     <h2 className="text-center">
         {props.copyright}
     </h2>
 
 );  


export default FooterC; //se exporta la funcion, para exportar la funcion se usa default, caso contrario se exporta un objeto   