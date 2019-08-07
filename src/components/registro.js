import React, { Component } from 'react';

import '../App.css';

class Registro extends Component {

  constructor(props) {

    super(props);

    this.onSubmitRegistro = this.onSubmitRegistro.bind(this);

    this.onCancel = this.onCancel.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      email: '',
      password: ''
    }

  }

  onCancel() {

    this.props.onCancel();

  }

  onSubmitRegistro() {
    this.props.onSubmitRegistro(this.state);
    
    this.setState ( {
      email: '',
      password: ''
    })
  }


  render() {

    return (

      <div className="input-panel">

      <span className="form-caption">Registro:</span>

      <div>

        <label className="field-name">Email:<br/>

          <input value={this.state.email} name="email" required onChange={this.handleInputChange} placeholder="email" />

        </label>

      </div>

      <div>

        <label className="field-name">password:<br/>

          <input value={this.state.password} type="password" name="password" required onChange={this.handleInputChange} placeholder="password" />

        </label>

      </div>
      <br/>

      <button onClick={() => this.onCancel()}>Cancelar</button> 

      <button onClick={() => this.onSubmitRegistro()}>Registrarse</button>

      </div>

    );

  }

  handleInputChange(event) {

    const target = event.target;

    const value = target.value;

    const name = target.name;

    this.setState({

      [name]: value

    });

  }

}

export default Registro;