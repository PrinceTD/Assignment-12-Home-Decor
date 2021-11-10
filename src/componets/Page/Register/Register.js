import React, { useState } from 'react';
import Header from '../header/Header';
import regImg from "../../../img/reg.jpg"
import Container from '@mui/material/Container';
import { Button, CircularProgress, Grid, TextField, Typography, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, registerUser, isLoading, authError } = useAuth();
    const handelOnChange = e => {
        const fild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[fild] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handelRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("your password is not match");
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={regImg} alt="" style={{ width: '100%' }} />
                    </Grid>
                    <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>Plase Register </Typography>
                        {!isLoading && <form onSubmit={handelRegisterSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handelOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type='password'
                                name="password"
                                onChange={handelOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="ReType Password"
                                type='password'
                                name="password2"
                                onChange={handelOnChange}
                                variant="standard" />
                            <Link to="/login">
                                <Button style={{ textDecoration: 'none', alignItems: "center" }} variant='text'>Already register? please Sign in</Button>
                            </Link>
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Sign In</Button>

                        </form>}
                        {isLoading && <CircularProgress />}
                        {
                            user?.email && <Alert severity="success">Register successfully Done</Alert>

                        }
                        {authError && <Alert severity="error">{authError}</Alert>
}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;