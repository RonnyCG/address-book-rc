import React, { Component } from 'react';

import Header from './components/Header'; //importo mi componente
import Footer from './components/Footer'; //importo mi componente
import SearchBox from './components/SearchBox'; //importo mi componente
import ContactForm from './components/ContactForm'; //importo mi componente


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText:'',
      firstName: '',
      lastName: '',
      phone:'',
    };
    
  }

  handleSearchTextChange = (event) =>{
    this.setState({
      searchText: event.target.value
    });
  }

   handleFirstNameChange = (event) =>{
    this.setState({
      firstName: event.target.value
    });
  }

 handleLastNameChange = (event) =>{
    this.setState({
      lastName: event.target.value
    });
  }

 handlePhoneChange = (event) =>{
    this.setState({
      phone: event.target.value
    });
  }


  render() {
    return (//se renderiza el cmponente aqui
      <div>
        <Header title="Address Book" /> 
        <div className ="Container">
          <div className="row">
            <div className="col-md-6">
              <SearchBox 
                value={this.state.searchText}
                onChange={this.handleSearchTextChange} //se pasa una declaracion de funcion, x eso no se usa (), xq seria llamar la funcion
              />
            </div>
            <div className="col-md-6">

              <h1>Nuevo Contacto</h1>
              <ContactForm 
                firstName={this.state.firstName}
                handleFirstNameChange={this.handleFirstNameChange}

                lastName={this.state.lastName}
                handleLastNameChange={this.handleLastNameChange}

                phone={this.state.phone}
                handlePhoneChange={this.handlePhoneChange}
              />
            </div>
          </div>
        </div>
        <Footer copyright="CopyRight 2017 - PUCE" />
      </div>
      
    );
  }
}

export default App;
