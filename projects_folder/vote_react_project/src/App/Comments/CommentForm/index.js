import React, {Component} from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    

    render(){
        return(
            <Form>
                <Form.Field control={TextArea} placeholder='Comment Here' />
                <Button size='mini'>Post</Button>
            </Form>
        )
    }
}

export default CommentForm;