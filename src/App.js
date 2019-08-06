import React, { Component } from 'react';

import './App.css';

import Registro from './components/registro';
import Pagina from './components/pagina';
import Login from './components/login';
import LiftitService from './services/API/liftit-service';

class App extends Component {

  constructor(props) {

    super(props);

    this.liftitService = new LiftitService();
    this.onCancel = this.onCancel.bind(this);
    this.onRegistro = this.onRegistro.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      login: true,
      registro: false,
      pagina:false ,
      paginalogin:false

    }

  }

  onCancel() {

    this.setState({
      login: true,
      registro: false,
      pagina:false ,
      paginalogin:false
    });

  }

  onSubmit(valores){

    this.setState({
      login: false,
      registro: true,
      pagina: false,
      paginalogin: false
    });
  }

  onRegistro() {
    
    this.setState({
      login: false,
      registro: true,
      pagina: false,
      paginalogin: false
    });
  }

  onSubmitRegistro(valores){
    this.liftitService.registrarUsuario(valores).then(res => {
      this.onCancel(); 
    });
  }

  render() {
    const login = this.state.login
    const registro = this.state.registro
    const pagina = this.state.pagina
    const paginaLogin = this.state.paginalogin
    return (

      <div className="App">
        {login && <Login onSubmit={this.onSubmit} onRegistro={this.onRegistro}/>}
    
        {registro && <Registro onCancel={this.onCancel} onSubmitRegistro={this.onSubmitRegistro}/>}

        {pagina && paginaLogin && <Pagina />}

      </div>
    );

  }

}

export default App;