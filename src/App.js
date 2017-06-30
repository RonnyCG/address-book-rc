import React, { Component } from 'react';

import Header from './components/Header'; //importo mi componente
import Footer from './components/Footer'; //importo mi componente


class App extends Component {
  render() {
    return (//se renderiza el cmponente aqui
      <div>
        <Header title="Address Book" /> 
        Hola Mundo
        <Footer copyright="CopyRight 2017 - PUCE" />
      </div>
      
    );
  }
}

export default App;
