import React from 'react';
import Service from '../Service';
import services from '../../shared/services.json';
import { Link, Switch, Route } from 'react-router-dom';
import './index.css';

function Services(props) {
    return (
        <div>
            <h1>Services</h1>
            <div className="service-links">
                { services.map((service, i) => {
                    let { name } = service;
                    return <Link key={i} to={`/services/${i}`}>{name}</Link>
                })}
                <div>
                <Switch>
                    <Route path="/services/:index" component={Service}></Route>
                </Switch>
                </div>
            </div>
        </div>
    )
}

export default Services;
