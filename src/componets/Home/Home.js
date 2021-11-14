import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Page/header/Header';
import Banner from '../Page/Banner/Banner';
import Info from '../Page/info/Info';
import Footer from '../share/Footer';
import Follow from '../share/follow/Follow';
import Add from '../share/Add/Add';
import Service from '../Page/Service/Service';
import HomeServiceLoad from '../Page/Service/HomeServiceLoad.js/HomeServiceLoad';
import OurServiceProcess from '../Page/Service/OurServiceProcess/OurServiceProcess';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Add></Add>
            <Header></Header>
            <Banner></Banner>
            <OurServiceProcess/>
           <HomeServiceLoad></HomeServiceLoad>
          
            <Follow></Follow>
            <Review></Review>
            <Footer></Footer>

        </div>
    );
};

export default Home;