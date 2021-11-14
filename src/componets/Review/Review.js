import React from 'react';

const Review = () => {

    return (
        <div className='container mt-5 mb-5 text-center'>
            <h2 style={{color: "coral", padding: 5}}>Review</h2>
            <hr/>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                       
                        <div class ="card-body">
                        <h5 class ="card-title">Mr. Kamal</h5>
                        <p class ="card-text">This Product is awasome.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        
                        <div class ="card-body">
                        <h5 class ="card-title">Mis. Rohima Katun</h5>
                        <p class ="card-text">Few days ago, i bought product, all is okk, good work home decore.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        
                        <div class ="card-body">
                        <h5 class ="card-title">Komol kanti Roy</h5>
                        <p class ="card-text">longer time i join with yours. all is okk</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        
                        <div class ="card-body">
                        <h5 class ="card-title">Nihir Babu</h5>
                        <p class ="card-text">my product is okk.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;