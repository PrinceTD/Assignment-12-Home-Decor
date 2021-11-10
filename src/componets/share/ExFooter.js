import React from 'react';

const ExFooter = () => {
    return (
        <div>
             <hr />
                <div className='row text-center'>
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
    );
};

export default ExFooter;