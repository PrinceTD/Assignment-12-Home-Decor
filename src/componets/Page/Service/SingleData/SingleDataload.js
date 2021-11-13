import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ExFooter from '../../../share/ExFooter';
import Header from '../../header/Header';
import BookingModel from '../ModelOrder/BookingModel';
import ShowProduct from './ShowProduct';

const SingleDataload = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/product/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div>
            <Header></Header>

            <div className="container text-center">
                <div className="d-flex justify-content-center">
                    <div >
                        <div class="card" style={{ width: "30rem" }}>
                            <img src={service?.img} alt="" />
                            <h2 style={{ color: "coral" }}>{service?.name}</h2>
                            <div class="card-body">
                                <p class="card-text">{service?.details}</p>
                                <h4>${service?.price}</h4>
                            </div>
                            <Link to='/service'>
                                <button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Go Back</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <ExFooter></ExFooter>
            </div>

            {/* <BookingModel
          service={service.name}
          open={open}
          handleClose={handleClose}
          ></BookingModel> */}


        </div>


    );
};

export default SingleDataload;