import React, { useState } from 'react';
import Header from '../header/Header';
import "./login.css";
import login from "../../../img/login.jpg"
import { Link, useLocation, useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography, Alert, CircularProgress, Box, Divider } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Add from '../../share/Add/Add';





const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handelOnChange = e => {
        const fild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[fild] = value;
        setLoginData(newLoginData);
    }
    const handelLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handelGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <Add></Add>
            <Header></Header>
            <div  className='text-center'>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                            <h1><i class="fas fa-lock"></i></h1>
                            <Typography variant="h5" gutterBottom>Plase Sign In </Typography>
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


                                {isLoading && <CircularProgress />}
                                {
                                    user?.email && <Alert severity="success">successfully login</Alert>

                                }
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>
                            <div className='text-center'>
                                <p>-------------or--------------</p>
                                <h2 >
                                    <Button onClick={handelGoogleSignIn} style={{ color: "coral" }} variant="outlined"><i className="pe-2 fab fa-google"></i>Sign In with Google</Button>
                                </h2>
                            </div>


                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={login} alt="" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Container >
            </div>
        </div >
    );
};

export default Login;