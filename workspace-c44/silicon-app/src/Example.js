import React from "react";

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return <>
            <span>{this.state.count}</span>
            <button onClick={this.handleChange}>Sumar</button>
        </>
    }
}
export default Example;