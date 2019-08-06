import React, { Component } from 'react';

import '../App.css';

class Registro extends Component {

  constructor(props) {

    super(props);

    this.onSubmitRegistro = this.onSubmitRegistro.bind(this);

    this.onCancel = this.onCancel.bind(this);

  }

  onCancel() {

    this.props.onCancel();

  }

  onSubmitRegistro() {
    this.props.onSubmitRegistro(this.state);
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

      <button onClick={() => this.onSubmitRegistro()}>Registrarse</button>

      </div>

    );

  }

}

export default Registro;