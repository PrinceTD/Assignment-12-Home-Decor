import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';

const HomeService = ({ service }) => {
    const { name, price, img } = service;
    return (
        
            <Card sx={{maxWidth: 345, m:1, textAlign: "center"}}>
                <CardActionArea style={{textAlign: "center"}}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={img}
                        alt={name}
                    />
                    <CardContent>
                        <Typography style={{color:"coral"}} gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                           ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                
            </Card>
      
    );
};

export default HomeService;