import { Container, Typography, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import SingleReview from "./SingleReview";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://tranquil-ridge-16978.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <Container sx={{ py: 4, mt: 6 }}>
                <Typography variant="h3" sx={{ my: 2 }}>
                   People says about us?
                </Typography>
                <Divider sx={{ mb: 3 }} />
               <div  class="card-group">
                   
               {reviews.map((review) => (
                       <SingleReview
                            key={review._id}
                            review={review}
                        ></SingleReview>
                    ))}
               </div>
              
            </Container>
        </div>
    );
};

export default Reviews;
