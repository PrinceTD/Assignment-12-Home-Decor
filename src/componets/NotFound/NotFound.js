import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../img/63729778-oops-page-not-found-concept-funny-cartoon-man-in-the-bathroom-washing-in-the-bath-tub-404-error-.jpg';

const NotFound = () => {
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="notFound_img text-center">
                    <img style={{height:'500px'}} className="img-fluid" src={notFoundImg} alt="" />
                </div>
                <div className="text-center">
                    <Link to="/home"><button style={{ backgroundColor: "coral", padding: "5px 15px", color: "#fff" }} className="border-0 rounded-pill">Go Back</button></Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;