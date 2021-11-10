
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Add from '../../share/Add/Add';
import Footer from '../../share/Footer';
import Header from '../header/Header';
import './Contact.css'

const Contact = () => {
    return (
        <>
            <Add></Add>
            <Header></Header>

            <div className='pt-5 mt-5 mb-3 pb-3'>
                <div className="container bg-con">
                    <div className='row'>
                        <div className='col-md-6 ps-3 pe-4'>
                            <h1>
                                Join us <br /> and stay tuned!
                            </h1>
                            <p>
                                Good products must have a solid value proposition and solve a real problem, be understandable by us
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <div className="p-2 ">
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '50%',
                                    }}
                                >
                                    <TextField fullWidth label="Your Email" id="fullWidth" />
                                </Box>
                            </div>
                            <div className="p-2">
                                <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Your Massage" id="fullWidth" />
                                </Box>
                                <div className='p-2'>
                                    <Link to='/home'>
                                        <Button variant="outlined">Sent</Button></Link>
                                </div>
                            </div >

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Contact;