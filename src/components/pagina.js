import React, { Component } from 'react';

import '../App.css';


class Pagina extends Component {

  constructor(props) {

    super(props);

    

    this.onCancel = this.onCancel.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

  
    this.state = {

      origen:'' ,

      destino: '',
      descripcion: ''

    };

  }


  onCancel() {

    this.props.onCancel();

  }

  onSubmit() {

      this.props.onSubmit(this.state);


  }

  render() {

    return (
      
      <div className="input-panel">

      <span className="form-caption">Login:</span>

      <div>

        <label className="field-name">Email:<br/>

          <input value={this.state.email} name="email" required onChange={this.handleInputChange} placeholder="email" />

        </label>

      </div>

      <div>

        <label className="field-name">password:<br/>

          <input value={this.state.username} type="password" name="password" required onChange={this.handleInputChange} placeholder="password" />

        </label>

      </div>
      <br/>

      <button onClick={() => this.onCancel()}>Cancelar</button> 

      <button onClick={() => this.onSubmit()}>Registrarse</button>

      </div>
    );

  }

}

export default Pagina;