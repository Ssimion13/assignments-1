import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ServiceDetail from './ServiceDetail';
import data from './data.json';

const Services = (props) => {
    const serviceLinks = data.map(service => {
        const path = service.name.toLowerCase().split(" ").join("-");
        return (
            <Link key={path} to={`${props.match.url}/${path}`}>{service.name}</Link>
        )
    })
        return (
            <div className="services">
                <h2>Services</h2>

                {serviceLinks}

                <Switch>
                    <Route path="/services/:serviceID" component={ServiceDetail}/>
                </Switch>
            </div>
        )
}

export default Services;
