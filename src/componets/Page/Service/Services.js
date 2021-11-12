import React from 'react';

const Services = ({service}) => {
    const { name, price, details, img } = service;
    return (

        <div class="col">
            <div class="card h-100">
                <img src={img} alt="" height='50%'/>
                <div class="card-body">
                    <h5 style={{color:"coral"}} class="card-title">{name}</h5>
                    <p class="card-text">{details.slice(0, 150)}</p>
                    <h3>$ {price}</h3>
                    <button style={{backgroundColor:"coral", padding: "5px 15px", color:"#fff"}} className="border-0">Shop Now</button>
                </div>
                
            </div>
        </div>


    );
};

export default Services;