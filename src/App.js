import React, { Component } from 'react';

import './App.css';

import Registro from './components/registro';
import Pagina from './components/pagina';
import Login from './components/login';

//import EditItem from './components/edit-item';

//import ItemService from './services/API/item-service';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      login: true,
      registro: false,
      pagina:false ,
      paginalogin:false

    }

  }

  onSubmit(state){

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

  render() {
    const login = this.state.login
    const registro = this.state.registro
    const pagina = this.state.pagina
    const paginaLogin = this.state.paginalogin
    return (

      <div className="App">
        {login && <Login onSubmit={this.onSubmit} onRegistro={this.onRegistro}/>}
    
        {registro && <Registro onCancel={this.onCreateItem} onSubmitRegistro={this.onSubmitRegistro}/>}

        {pagina && paginaLogin && <Pagina />}

      </div>
    );

  }

}

export default App;