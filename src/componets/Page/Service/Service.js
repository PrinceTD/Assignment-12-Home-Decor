import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExFooter from '../../share/ExFooter';
import Header from '../header/Header';
import Services from './Services';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/product"
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <>
        <Header></Header>
        <div className="container mt-5 mb-5">
            <div>

            </div>
            <div className='text-center pb-3'>
                <h2 style={{color:"coral"}}>Our Products</h2>
                <p style={{color:"gray"}}>Our upholstery range is available in a furniture in a beautiful array of colours and types. To see the full range please come and see us in store, or alternatively contact us to discuss your ideas and we can post out samples to your home. Each and every sofa comes with a 10 year frame guarantee. </p>
            </div>
            <div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                    {
                        service.map (service => <Services
                            key={service._id}
                            service={service}
                        ></Services>)
                    }

                </div>
            </div>

        </div>
        <ExFooter></ExFooter>
        </>
    );
};

export default Service;