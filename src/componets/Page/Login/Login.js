import React, { useState } from 'react';
import Header from '../header/Header';
import "./login.css";
import login from "../../../img/login.jpg"
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography, Alert, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';





const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const handelOnChange = e => {
        const fild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[fild] = value;
        setLoginData(newLoginData);
    }
    const handelLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>Plase Sign In </Typography>
                        <form onSubmit={handelLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onChange={handelOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type='password'
                                name="password"
                                onChange={handelOnChange}
                                variant="standard" />
                            <br />
                            <Link to="/register">
                                <Button style={{ textDecoration: 'none', alignItems: "center" }} variant='text'>new User? please Register</Button>
                            </Link>
                            <br />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Sign In</Button>

                        </form>
                        {isLoading && <CircularProgress />}
                        {
                            user?.email && <Alert severity="success">successfully login</Alert>

                        }
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;