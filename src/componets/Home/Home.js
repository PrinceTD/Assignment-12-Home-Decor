import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Page/header/Header';
import Banner from '../Page/Banner/Banner';
import Info from '../Page/info/Info';
import Footer from '../share/Footer';
import Follow from '../share/follow/Follow';
import Add from '../share/Add/Add';


const Home = () => {
    return (
        <div>
            <Add></Add>
            <Header></Header>
            <Banner></Banner>
            <Info></Info>
            <Follow></Follow>
            <Footer></Footer>

        </div>
    );
};

export default Home;