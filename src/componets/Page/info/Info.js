import React from 'react';
import bgImg from '../../../img/big_sofa.png'
import imgOther from "../../../img/Untitled-3.png"
import "./info.css"

const Info = () => {
    return (
        <div className="container">
            <div className='text-center mt-5 pt-5 mb-5 pb-5' >
                <h1 className='pb-4' style={{fontSize:"50px", fontFamily:"'Mochiy Pop P One', sans-serif",}}> Welcome to <span className='info'>Home Decore</span> </h1>
                <p style={{ color: "gray" }}>Decorate your own adobe with the wonderful collection of your furniture. Look at all sorts of our collections
                    <br />
                    and pick the one that will adorn your home the most.</p>
            </div>
            <div className=' mt-5'>
                <div className="row">

                    <div className='col-md-3 col-4' style={{ fontFamily: "'Oswald', sans-serif" }}>
                        <h1 className="info-hover">BIG DISCOUNT</h1>
                        <h3 style={{ color: "gray" }}>In New Arrival Items</h3>
                    </div>
                    <div className='col-md-5 col-6'>
                        <img style={{ marginTop: " -100px" }} src={bgImg} alt="" height='100%'/>
                    </div>
                    <div className='col-md-2 col-5' style={{ fontFamily: "'Oswald', sans-serif" }}>
                        <h1 className="info-hover">SALE</h1>
                        <h3 style={{ color: "gray" }}>Wood Furniture</h3>
                    </div>
                    <div className='col-md-2 col-7' >
                        <img style={{ marginTop: " -100px" }} src={imgOther} alt="" height='100%' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Info;