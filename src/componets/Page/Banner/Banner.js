import React from 'react';
import "./Banner.css"
import bannerImg from '../../../img/Untitled-1.png'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className="bacakground-img">
            <div className="container">
                <div className="row bg-infoImg pt-5 pb-5 font">
                    <div className="col-md-5 mt-5 ">
                        <h1 style={{fontSize:"70px", fontFamily:"'Mochiy Pop P One', sans-serif"}}> <span className='pb-5'>HOME</span> <br /> <span>DECOR</span></h1>
                        <h5 className='pt-3' style={{ color: "red" }}>Decorate with Furniture</h5>
                        <p className='pt-3' style={{ color: "gray" }}>Decorate and Shop your  Dream Home</p>
                       <Link to='/service'> <Button variant="contained">Shop Now</Button></Link>
                    </div>

                    <div className="col-md-7">
                        <div className="bg">
                            <img src={bannerImg} alt="" height='70%' width='70%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;