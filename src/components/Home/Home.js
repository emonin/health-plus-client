import React, { useEffect, useState } from 'react';
import { Carousel, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    const [homeServices , setHomeServices] = useState([]);
    useEffect(() =>
    {
        fetch('./servicesHome.json')
        .then(res => res.json())
        .then(data => setHomeServices(data))
    },[])
    return (
        <div className="container">
            <section className="mt-5 shadow-lg rounded p-4 bg-white">
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img
                            className="d-block my-0 mx-auto w-100 img-fluid border rounded"
                            src="https://i.ibb.co/mDJxDwS/img-1.png"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            className="d-block my-0 mx-auto w-100 img-fluid border rounded"
                            src="https://i.ibb.co/FHQHVs8/img-2.png"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item  interval={2000}>
                            <img
                            className="d-block my-0 mx-auto w-100 img-fluid border rounded"
                            src="https://i.ibb.co/1bf5vT3/img-3.png"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                </Carousel>
            </section>
            <div className="d-flex align-items-center justify-content-between my-5">
            <div>
                <p className="text-secondary">WHAT WE DO</p>
                <h2 className="text-primary fw-bold">Managed Healthcare Services</h2>
            </div>
            <Link to="/services"><Button variant="outline-secondary ms-5">All Services</Button></Link>
            </div>
            <section className="bg-white shadow-lg rounded p-4">
            <Row xs={1} md={3} className="g-4">
                {
                    homeServices.map(homeService => <HomeService
                        key={homeService.id}
                        homeService={homeService}
                    ></HomeService>)
                }
            </Row>
            </section>
        </div>
    );
};

export default Home;