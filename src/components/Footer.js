import React from 'react';
const FooterC = (props) => ( //cuando es un componente funcional se agregan los props como argumentos de la funcion

     <p className="text-center">
         {props.copyright}
     </p>
 
 );  


export default FooterC; //se exporta la funcion, para exportar la funcion se usa default, caso contrario se exporta un objeto   