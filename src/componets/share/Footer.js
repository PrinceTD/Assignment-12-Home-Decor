import React from 'react';
import './footer.css'
import icon from '../../img/Untitled-4.png'
import { p } from 'react-router-dom';

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

                <div className="col-12 col-md-4">
                    <input className="border-size" type="email" name="email" id="" />
                    <input className="border-0 border-size" type="submit" value="subscribe" />
                </div>

            </div>
            <div>
                <hr />
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='pt-2'>© 2021 PrinceTD. All rights reserved</p>
                    </div>
                    <div className='col-md-6'>
                        <h6>
                        <i className="pe-3 fab fa-facebook-f"></i>
                        <i className="pe-3 fab fa-instagram"></i>
                        <i className="pe-3 fab fa-google-plus-g"></i>
                        <i className="pe-3 fas fa-globe-europe"></i>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;