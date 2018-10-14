import React, { Component } from 'react';

class Services extends Component {
    render() {
      return (
            // services section -->
            <section id="services" class="comp comp-services">
                <div class="container">
                    <div class="sub-info text-center">
                        <h2 class="subheading">One stop for home interiors</h2>
                        <p class="sub-text">Design your complete home, right here at Livspace</p>
                    </div>
                     {/* list --> */}
                    <div class="services-list clearfix">
                         {/* item --> */}
                        <div class="services-item">
                            <a href="">
                                <div class="wrapper">
                                    <img src="https://images.livmatrix.com/ls_image/208385/livspace-designer.png" class="img-responsive" alt="" />
                                    <div class="service-content">
                                        <h5>1000+ Interior Designers</h5>
                                        <p>Design your home with the best in India. Space planning, 3D design, et all for
                                                your budget and style.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="services-item">
                            <a href="">
                                <div class="wrapper">
                                    <img src="https://images.livmatrix.com/ls_image/334646/modular-kitchen.png" class="img-responsive" alt="" />
                                    <div class="service-content">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="services-item">
                            <a href="">
                                <div class="wrapper">
                                    <img class="img-responsive" src="https://images.livmatrix.com/ls_image/334472/furniture-decor.png" alt="" />
                                    <div class="service-content">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="services-item">
                            <a href="">
                                <div class="wrapper">
                                    <img class="img-responsive" src="http://images.livmatrix.com/ls_image/208770/onsite-services.png" alt="" />
                                    <div class="service-content">
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