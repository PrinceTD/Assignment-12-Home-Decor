import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeServices from '../HomeServiceLoad.js/HomeService';

const HomeServiceLoad = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = "https://tranquil-ridge-16978.herokuapp.com/product"
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data.slice(1, 7)))
    }, []);

    return (
        <div className="container mt-5 mb-5">
            <div>

            </div>
            <div className='text-center pb-3'>
                <h2 style={{ color: "coral" }}>Our Products</h2>
                <hr />
                <p style={{ color: "gray" }}> <Link to="/service">
                    <Button>View Our All Service</Button>
                </Link></p>
            </div>
            <div className="pt-3">
                <div class="row row-cols-1 row-cols-md-3">

                    {
                        service.map(service => <HomeServices
                            key={service._id}
                            service={service}
                        ></HomeServices>)
                    }

                </div>

            </div>
            <div>
               
            </div>
        </div>
    );
};

export default HomeServiceLoad;