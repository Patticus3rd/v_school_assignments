import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

class PartyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            party: ""
        }
    }



    render() {
        const options =[
            {key: 1, text: 'Democrat', value: 1},
            {key: 2, text: 'Republican', value: 1} 
        ]
        return (
            <Menu compact>
                <Dropdown text='Pick Your Party!' options={options} simple item />
            </Menu>
        )
    }
}

export default PartyHome;