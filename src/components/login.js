import React, { Component } from 'react';

import '../App.css';


class Login extends Component {

  constructor(props) {

    super(props);

    console.log("aca llega");

    this.onSubmit = this.onSubmit.bind(this);

    this.onRegistro = this.onRegistro.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };

  }

  handleInputChange(event) {

    const target = event.target;

    const value = target.value;

    const name = target.name;

    this.setState({

      [name]: value

    });

  }


  onRegistro() {

    this.props.onRegistro();

  }

  onSubmit() {
    this.props.onSubmit(this.state);
    
    this.setState ( {
      email: '',
      password: '',
    });
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

          <input value={this.state.password} type="password" name="password" required onChange={this.handleInputChange} placeholder="password" />

        </label>

      </div>
      <br/>

      <button onClick={() => this.onRegistro()}>Registro</button> 

      <button onClick={() => this.onSubmit()}>Login</button>

      </div>

    );


    

  }

}

export default Login;