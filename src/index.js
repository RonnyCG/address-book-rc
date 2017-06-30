import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// import React from 'react'; //importar *que (esta en las dependencias) de *donde 
// import ReactDOM from 'react-dom';
// //React trabaja bajo la filosofia de crear compontes y sobre el virtual DOM, que es una represntacion en javascript del
// //DOM real. Lo mas pesado en software es procesar cambios en la interfaz, el virtual DOM ayuda a optimizar esto

// const MiPrimerComponente = () => ( //const ahorra memoria y asegura q la variable no sea reasignada y se usa funciones flecha
//  //React.createElement('div', { className: 'text-center' }, 
//  //'Hola Mundo')
//     <div className="text-center">
//         Hola Mundo
//     </div>
 
//  );  


//  //la funcion debe retornar elementos react, esto se ahce directo usando las flechas
// //significa que cuando se renderize el elemento, se renderiza un div, los props (atributos)y los hijos del elemento
//  //componentes en react son funciones

// ReactDOM.render(
//     <MiPrimerComponente/>,
//     document.getElementById('root')
//     ); //indica q voy a renderizar y en donde, entoncs renderizoo miprimercomponente en el div root
