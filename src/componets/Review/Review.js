import { Container, Typography, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import SingleReview from "./SingleReview";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <Container sx={{ py: 4, mt: 6 }}>
                <Typography variant="h3" sx={{ my: 2 }}>
                    What people says about us?
                </Typography>
                <Divider sx={{ mb: 3 }} />
               
                    {reviews.map((review) => (
                       <SingleReview
                            key={review._id}
                            review={review}
                        ></SingleReview>
                    ))}
              
            </Container>
        </div>
    );
};

export default Reviews;
