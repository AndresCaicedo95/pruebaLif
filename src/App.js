import React, { Component } from 'react';

import './App.css';

import Registro from './components/registro';
import Pagina from './components/pagina';
import Login from './components/login';
import LiftitService from './services/API/liftit-auth-service';

import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDrJZ-gveVzsC_a9FbA_J3vhNzK3Cm5o3U',
  authDomain: 'pruebaliftit-1565109301603.firebaseapp.com',
  databaseURL: 'https://pruebaliftit-1565109301603.firebaseio.com',
  storageBucket: 'pruebaliftit-1565109301603.appspot.com',
  messagingSenderId: '7968**********'
}
firebase.initializeApp(config)

class App extends Component {

  constructor(props) {

    super(props);

    this.liftitService = new LiftitService();
    console.log(this.liftitService);
    this.onCancel = this.onCancel.bind(this);
    this.onRegistro = this.onRegistro.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitRegistro = this.onSubmitRegistro.bind(this);

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
    this.liftitService.loginUser(valores.email,valores.password).then(data => {
      if(data){
        this.setState({
          login: false,
          registro: false,
          pagina: true,
          paginalogin: true
        });
      }else{
        this.onCancel();
      }
    })
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
    this.liftitService.crearUsuario(valores.email,valores.password)
    this.onCancel() 
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