import React from 'react';
import './footer.css';
import { TextField , Box, Button } from '@mui/material';
import ExFooter from './ExFooter';

const Footer = () => {
    return (
        <div className='container text-center'>
            <div className="row mt-5 mb-5">
                <div className="col-12 col-md-4">
                    <span style={{ fontFamily: "'Mochiy Pop P One', sans-serif", }} className='info'>Home Decore.</span>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <p className='pe-2'>Home</p>
                    <p className='pe-2'>About</p>
                    <p className='pe-2'>contact</p>
                </div>

                <div className="col-12 col-md-4 d-flex">
                    <Box
                                    sx={{
                                        width: 500,
                                        maxWidth: '50%',
                                    }}
                                >
                                    <TextField fullWidth label="Your Email" id="fullWidth" />
                                    
                    </Box>
                    <Button variant="contained">Follow</Button>
                   
                </div>

            </div>
            <div>
               <ExFooter></ExFooter>
            </div>
        </div>
    );
};

export default Footer;