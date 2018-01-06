import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { inputs: "" };
        this.changeHeader = this.changeHeader.bind(this)
    }


    changeHeader(head) {
        this.setState((prevState) => {
            return {
                inputs: "...prevState.inputs, head"
            }
        })
    }

    render() {
        return (
            <div>
                <h1 value={this.changeHeader}></h1>
            </div>
        )
    }
}


export default Header;