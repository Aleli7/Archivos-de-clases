import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

class PersonaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/persona")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          personas: result
        });
      },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error);
          this.setState({
            error,
            personas: []
          });
        }
      )
  }
  render() {
    let rowsTable = this.state.personas.map((persona, index) => {
      return (
        <tr key={index}>
          <td>{persona.dni}</td>
          <td>{persona.nombre}</td>
          <td>{persona.apellido}</td>
        </tr>
      )
    });

    return (
      <>
        <Menu />
        <h1>Lista de personas</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Apellido</th>
            </tr>
          </thead>
          <tbody>
            {rowsTable}
          </tbody>
        </table>
      </>

    );
  }
}

export default PersonaList;