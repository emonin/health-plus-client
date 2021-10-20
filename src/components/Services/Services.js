import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([]);

    useEffect(() =>
    {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <section className="container">
            <h1 className="text-primary fw-bold my-5">All Healthcare Services</h1>
            <div className="bg-white shadow-lg rounded p-4">
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>   
            
            </div>
            
        </section>
    );
};

export default Services;