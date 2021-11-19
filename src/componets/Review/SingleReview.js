import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleReview = ({ review }) => {

    return (
        <div>
            <div class="card g-2">

                <div class="card-body">
                    <h5 class="card-title">{review.name}</h5>
                    <p>{review.rating}</p>
                    <p class="card-text">{review.review}</p>
                </div>
                
            </div>

        </div>
    );
};

export default SingleReview;
