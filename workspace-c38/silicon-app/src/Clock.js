import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            nombre: props.nombre
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Bienvenido:{this.state.nombre.toUpperCase()}</h1>
                <h2>Son Las: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;