import React, { Component } from 'react';

class Services extends Component {
    render() {
      return (
            // services section -->
            <section id="services" className="comp comp-services">
                <div className="container">
                    <div className="sub-info text-center">
                        <h2 className="subheading">One stop for home interiors</h2>
                        <p className="sub-text">Design your complete home, right here at Livspace</p>
                    </div>
                     {/* list --> */}
                    <div className="services-list clearfix">
                         {/* item --> */}
                        <div className="services-item">
                            <a href="">
                                <div className="wrapper">
                                    <img src="https://images.livmatrix.com/ls_image/208385/livspace-designer.png" className="img-responsive" alt="" />
                                    <div className="service-content">
                                        <h5>1000+ Interior Designers</h5>
                                        <p>Design your home with the best in India. Space planning, 3D design, et all for
                                                your budget and style.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="services-item">
                            <a href="">
                                <div className="wrapper">
                                    <img src="https://images.livmatrix.com/ls_image/334646/modular-kitchen.png" className="img-responsive" alt="" />
                                    <div className="service-content">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="services-item">
                            <a href="">
                                <div className="wrapper">
                                    <img className="img-responsive" src="https://images.livmatrix.com/ls_image/334472/furniture-decor.png" alt="" />
                                    <div className="service-content">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="services-item">
                            <a href="">
                                <div className="wrapper">
                                    <img className="img-responsive" src="http://images.livmatrix.com/ls_image/208770/onsite-services.png" alt="" />
                                    <div className="service-content">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
      );
    }
  }
  
export default Services;