import React, { Component } from 'react';
import BountyForm from '../../BountyForm';

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true,
        }
        this.toggleDisplay =  this.toggleDisplay.bind(this)
    }

    toggleDisplay(){
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden
            }
        })
    }

    render(){
        let { hidden } = this.state;
        let { index, editForm } = this.props;
        let formStyle = { display: hidden ? "none" : "initial" }
        return(
            <div>
                <button onClick={this.toggleDisplay}>Edit</button>
                <div style={formStyle}>
                    <BountyForm submit={editForm}{...this.props}></BountyForm>
                </div>
            </div>
        )
    }
}

export default EditForm;