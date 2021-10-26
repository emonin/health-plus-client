import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ICU = () => {
    return (
        <div className="container">
            <h1 className="text-primary fw-bold my-5">ICU</h1>
            <div className="bg-white shadow-lg rounded p-5">
                <div className="border shadow rounded p-4">
                    <p className="text-secondary">
                        The Intensive Care Unit is an expensive resource area and should be reserved for patients with reversible medical conditions with a reasonable prospect of substantial recovery. Patients with the following conditions are candidates for admission to the General Intensive Care Unit.
                    </p>
                </div>
                <Link to='/home'><Button className="my-5" variant="primary">ICU Details</Button></Link>
            </div>
        </div>
    );
};

export default ICU;