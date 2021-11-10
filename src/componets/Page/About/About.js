import { Avatar } from '@mui/material';
import Footer from '../../share/Footer';
import Header from '../header/Header';
import imgMan from '../../../img/man3.jpg'
import Add from '../../share/Add/Add';

const About = () => {
    return (
        <div>
            <div >
                <Add></Add>
                <Header></Header>
                <div>
                    <div className="bg-secondary text-light text-center pt-4 pb-5">
                        <div className="container">
                            <h2>About Our family</h2>
                            <p>There is a huge possibility that you’ve read a company’s 'About us' page before buying a product or service online.
                                <br /> Customers tend to establish a certain level of trust with the company before purchase</p>
                        </div>
                    </div>
                    <div className='container mt-4'>
                        <div className="row">
                            <div style={{ backgroundColor: "#333333" }} className=" col-md-6">
                                <div className='d-flex  p-4'>
                                    <h1 className='me-2'><i className=" text-warning fas fa-dolly-flatbed"></i></h1>
                                    <div className="text-light">
                                        <h2 className="text-light">Free Shipping</h2>
                                        <p className="text-secondary">All orders over $59. Erat eveniet mauris quisque, magni dignissimos eget inceptos ullamco enim, parturient totam.</p>
                                    </div>
                                </div>
                                <div className='d-flex  p-4'>
                                    <h1 className='me-2'><i className="text-warning fas fa-history"></i></h1>
                                    <div className="text-light">
                                        <h2 className="text-light">14 Days Return</h2>
                                        <p className="text-secondary">All orders over $59. Erat eveniet mauris quisque, magni dignissimos eget inceptos ullamco enim, parturient totam.</p>
                                    </div>
                                </div>
                                <div className='d-flex p-4 '>
                                    <h1 className='me-2'><i className="text-warning fas fa-shipping-fast"></i></h1>
                                    <div >
                                        <h2 className="text-light">First Delivary</h2>
                                        <p className="text-secondary">All orders over 2days Erat eveniet mauris quisque, magni dignissimos eget inceptos ullamco enim, parturient totam.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 ps-5 p-5'>
                                <h2 className='ps-5'>Testimonials</h2>
                                <h1 style={{fontSize:'120px', color:"gray"}} className='ps-5'>01</h1>
                                <p className='ps-5'>Source initiates an action through Web Deploy, the Web Deploy Framework establishes a connection with the destination. Web Deploy supports two connection end-points, and the one you use depends on several factors</p>
                                <div className='ps-5 d-flex'>
                                <Avatar alt="Cindy Baker" src={imgMan} /> <span className="ps-3 pt-1">Maikrl Clrk/Web</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;