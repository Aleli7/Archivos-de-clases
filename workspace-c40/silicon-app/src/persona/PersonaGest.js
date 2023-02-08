import React from "react";
import Menu from "../Menu";


class PersonaGest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dni: '',
      nombre: '',
      apellido: ''
    };
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
 
  handleSubmit(event) {
    event.preventDefault();

    let data = {
      dni:this.state.dni,
      nombre:this.state.nombre,
      apellido:this.state.apellido
    };

    let request = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        "Accept":'application/json'
      }
    };     

    fetch("http://localhost:8080/api/persona",request)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        alert("EXITO");
      },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error); 
        }
      )
  }

  render() {
    return (
      <>
        <Menu />
        <h1>Gestion Personas</h1>
        <form onSubmit={this.handleSubmit} method="POST">
          <div>
            <label>DNI:
              <input type="text" name="dni" value={this.state.dni} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>Nombre:
              <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>Apellido:
              <input type="text" name="apellido" value={this.state.apellido} onChange={this.handleChange} />
            </label>
          </div>
          <input type="submit" value="Guardar" />
        </form>
      </>

    );
  }
}


export default PersonaGest;