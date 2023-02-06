import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
        this.saludar = this.saludar.bind(this);
    }

    saludar() {
        this.setState({
            saludo: this.state.saludo === "HOLA" ? "CHAU" : "HOLA"
        });
    }
    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
        //  this.setState(prevState => ({
        //    isToggleOn: !prevState.isToggleOn
        //  }));
    }

    render() {
        const numbers = [1, 2, 3, 4, 5,6];
        // let listitems2 = [];
        // for(var i=0;i<numbers.length;i++){
        //     listitems2.push(<p key={numbers[i].toString()}>{numbers[i]}</p> );
        // }
        const listItems = numbers.map((number) =>
            <p key={number.toString()}>{number}</p>
        );

        return (
            <>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <button onClick={this.saludar}>
                    {this.state.saludo}
                </button>
                <br/>
                {listItems}
            </>
        );
    }
}

export default Toggle;