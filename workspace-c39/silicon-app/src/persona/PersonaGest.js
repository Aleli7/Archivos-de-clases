import React from "react";
import Menu from "../Menu";


class PersonaGest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (this.state.value !== event.target.value) {
      this.setState({ value: event.target.value });
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Menu />
        <h1>Gestion Personas</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>

    );
  }
}


export default PersonaGest;