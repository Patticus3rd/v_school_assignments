import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';



class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputs: ""
        }
    }

    



    render(){
        return(
            <div>
                <Form>
                    <Form.Field>
                        <Form.Input placeholder="search"/>
                        <Button>Click Me</Button>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

export default SearchForm;