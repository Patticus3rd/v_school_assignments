import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BountyCard from './BountyCard';
import BountyForm from '../../shared/BountyForm.js';

import axios from 'axios';

const btyURL = "http://localhost:8080/bounties"

class Bounties extends Component {
    constructor(props){
        super(props);
        this.state = {
            bounties: [],
            loading: true,
            err: false,
        }
        this.addBounty = this.addBounty.bind(this);
    }

    componentDidMount(){
        axios.get(btyURL)
        .then((response) => {
            console.log(response)
            this.setState({
                bounties: response.data
            })  
        })
        .catch((err) => {
            console.log(err)
        })  
    }

    addBounty(bounty){
        axios.post(btyURL, bounty)
        .then((response) => {
            console.log(response)
            let { data } = response;
            this.setState(( prevState ) => {
                let newBounty = [...prevState.bounties, data];
                return {
                    bounties: newBounty
                }
            })
        })
        .catch((err) => {
            console.log(err);
           
        })
    }

    render(){
        let { bounties } = this.state;
        return(
            <div>
                <BountyForm submit={this.addBounty} clear/>
            {bounties.map((bounty, index) => {
                return <BountyCard key={index}{...bounty}></BountyCard>
            })}
            </div>
        )
    }
}

export default Bounties;