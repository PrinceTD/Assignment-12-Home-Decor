import { Button, Grid, Typography, Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";


const AddReview = () => {
    
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log(res);
        });
        reset();
    };




    return (
        <div>
            <form  onSubmit={handleSubmit(onSubmit)}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
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
                           

                            <label htmlFor="rating">Rating</label>
                            <input
                                {...register("rating", { min: 1, max: 5 })}
                                type="number"
                                id="rating"
                                placeholder='1 to 5'
                                required
                            />
                            <label htmlFor="review">Review</label>
                            <textarea
                                {...register("review")}
                                type="text"
                                id="review"
                                required
                            />
                <Button
                    type="submit"
                    sx={{ m: 1 }} variant="outlined">Add Review</Button>
            </form>
        </div >
    );
};

export default AddReview;
