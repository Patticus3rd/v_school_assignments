import React, { Component } from 'react';

class PicForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs:{
                imgUrl: "",
                caption: ""
            }
     }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        console.log(e.target)
        let { value, name } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs(){
        this.setState({
            inputs:{
                imgUrl: "",
                caption: ""
        }
    })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addPic(this.state.iputs)
    }

    render() {
        let { imgUrl, caption } = this.state;
        return (
            <form onSubmit={this.handleSubmit}> 
                <input onChange={this.handleChange} name="imgUrl" value={imgUrl} type="text" placeholder="URL"/>
                <input name="caption" value={caption} type="text" placeholder="caption"/>
                <button>Submit</button>
            </form>
        )
    }
}


export default PicForm;