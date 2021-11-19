import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import ExFooter from '../../../share/ExFooter';
import Header from '../../header/Header';
import BookingModel from '../ModelOrder/BookingModel';
import ShowProduct from './ShowProduct';

const SingleDataload = () => {
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const [service, setService] = useState({});
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/product/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    const onSubmit = (data) => {
        const newData = { ...data, status: "pending" };
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newData),
        }).then((res) => { });
        setOpen(true);
        reset();
    };

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
                {service._id && <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <label htmlFor="name">Full Name</label>
                    <input
                        {...register("name")}
                        type="text"
                        id="name"
                        required
                        defaultValue={user.displayName}
                        readOnly
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        required
                        defaultValue={user.email}
                        readOnly
                    />
                    <label htmlFor="product-id">
                        Product ID
                    </label>
                    <input
                        {...register("productId")}
                        type="text"
                        id="product-id"
                        required
                        defaultValue={service._id}
                        readOnly
                    />
                    <label htmlFor="address">Address</label>
                    <input
                        {...register("address")}
                        type="address"
                        required
                        id="address"
                        placeholder="Address"
                    />

                    <label htmlFor="phone">Phone</label>
                    <input
                        {...register("phone")}
                        type="tel"
                        required
                        id="phone"
                        placeholder="Mobile"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, fontSize: "1.5rem" }}
                    >
                        Place Order
                    </Button>
                </form>}

                <ExFooter></ExFooter>
            </div>

         


        </div>


    );
};

export default SingleDataload;