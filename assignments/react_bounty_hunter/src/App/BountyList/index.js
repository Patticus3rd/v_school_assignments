import React, { Component } from 'react';
import BountyCard from './BountyCard';
import BountyForm from './BountyForm';
import './index.css';

import axios from 'axios';

const btyURL = "http://localhost:8080/bounties/"

class Bounties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounties: [],
            loading: true,
            err: false,
        }
        this.addBounty = this.addBounty.bind(this);
        this.removeBounty = this.removeBounty.bind(this);
    }

    componentDidMount() {
        axios.get(btyURL)
            .then((response) => {
                console.log(response)
                this.setState({
                    bounties: response.data,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    addBounty(bounty) {
        axios.post(btyURL, bounty)
            .then((response) => {
                console.log(response)
                let { data } = response;
                this.setState((prevState) => {
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

    removeBounty(id) {
        axios.delete(btyURL + id)
            .then((response) => {
                this.setState((prevState) => {
                    return {
                        bounties: prevState.bounties.filter((bounty) => {
                            return bounty._id !== id
                        })
                    }
                })
            })
    }


    render() {
        let { bounties } = this.state;
        return (
            <div>
                <div class="div-container">
                    <div class="center-form">
                        <BountyForm submit={this.addBounty} clear />
                    </div>

                </div>
                <div>
                    {bounties.map((bounty, index) => {
                        return <BountyCard index={index} removeBounty={this.removeBounty} key={index}{...bounty}></BountyCard>
                    })}
                </div>

            </div>
        )
    }
}

export default Bounties;