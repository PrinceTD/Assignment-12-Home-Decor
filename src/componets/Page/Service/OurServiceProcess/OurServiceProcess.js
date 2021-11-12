import React from 'react';

const OurServiceProcess = () => {
    return (
        <div className='container '>
            <div class="row row-cols-1 row-cols-md-4 g-4  mt-5 mb-5 pb-5 pt-5">
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1><i className=" text-warning fas fa-dolly-flatbed"></i></h1>
                        <div class="card-body">
                            <h4 style={{color:"coral"}}>Free Shipping</h4>
                            <p className="text-secondary"><small>All orders over $59. Erat eveniet mauris quisque.</small></p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1><i className="text-warning fas fa-history"></i></h1>
                        <div class="card-body">
                            <h4 style={{color:"coral"}}>14 Days Return</h4>
                            <p className="text-secondary"><small>Magni dignissimos eget inceptos ullamco enim.</small></p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1><i className="text-warning fas fa-shipping-fast"></i></h1>
                        <div class="card-body">
                            <h4 style={{color:"coral"}}>First Delivary</h4>
                            <p className="text-secondary"><small>All orders over 2days Erat eveniet mauris quisque.</small></p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 text-center border-cart">
                        <h1><i class="text-warning fas fa-user-lock icon-clr"></i></h1>
                        <div class="card-body">
                            <h5 style={{color:"coral"}}>FAST BOOKING</h5>
                            <p class="text-secondary"><small>Get Expert Advice and Curated Content on Searchley</small></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServiceProcess;