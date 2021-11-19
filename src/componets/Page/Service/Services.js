import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { _id, name, price, details, img } = service;

   
  

    return (

        <div class="col">
            <div class="card h-100">
                <img src={img} alt="" height='50%' />
                <div class="card-body">
                    <h5 style={{ color: "coral" }} class="card-title">{name}</h5>
                    <p class="card-text">{details.slice(0, 150)}......</p>
                    <h3>$ {price}</h3>
                    <div className="d-flex justify-content-between">
                        <Link to={`/service/${_id}`}>
                            <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Details</button>
                        </Link>
                    </div>
                  

                </div>
            </div>



        </div>


    );
};

export default Services;