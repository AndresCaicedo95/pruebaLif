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

      <span className="form-caption">Servicio:</span>

      <div>

        <label className="field-name">Dirección origen:<br/>

          <input value={this.state.origen} name="origen" required onChange={this.handleInputChange} placeholder="origen" />

        </label>

      </div>

      <div>

        <label className="field-name">Dirección destino:<br/>

          <input value={this.state.destino}  name="destino" required onChange={this.handleInputChange} placeholder="destino" />

        </label>

      </div>

      <div>

        <label className="field-name">descripcion:<br/>

        <input value={this.state.descripcion}  name="descripcion" required onChange={this.handleInputChange} placeholder="descripcion" />

      </label>

      </div>

      
      <div>

        <label className="field-name">tiempo estimado ruta: 
        </label>
        <label className="field-name">{this.state.tiempo}<br/>
        </label>
      
      </div>

      <div>

        <label className="field-name">distancia: 
        </label>
        <label className="field-name">{this.state.distancia}<br/>
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