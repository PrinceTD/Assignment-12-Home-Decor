import { Container, Grid, TextField, Typography, Button, Card, CardActions, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./login.css"

const Login = () => {
    const handelLogin = e => {

        e.preventDefault();
    }


    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Sign in to continue
                </Typography>
                <Typography variant="h5" component="div">
                    <form onSubmit={handelLogin}>
                        <TextField
                           
                            id="standard-basic"
                            label="Your Email"
                            variant="standard" />
                        <TextField
                          
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            variant="standard"
                        />
                        <Button
                           
                            variant="contained"
                            type="submit"
                        > Sign In</Button>
                    </form>
                </Typography>

            </CardContent>
           
        </React.Fragment>
    );

    return (
        <div className="d-flex">
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
            
        </div>
    );
};

export default Login;