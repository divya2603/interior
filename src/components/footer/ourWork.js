import React, { Component } from 'react';

class OurWork extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="footer-links-web">
                <ul className="menu-list">
                    <li className="list-item">1000+ Happy Customers</li>
                    <li className="list-item">5000+ Designs</li>
                    <li className="list-item">10000+ Projects</li>
                </ul>
            </div>
            <div className="social-login ">
                <div className="footer-support-icons">
                    <div className="social-media">
                        <ul className="list-inline list-unstyled text-uppercase">
                            <li className="text-uppercase">Join us on</li>
                            <li>
                                <a href="https://www.facebook.com/livspace" target="_blank" className="img img-circle">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://plus.google.com/+Livspace" target="_blank" className="img img-circle">
                                    <i className="ifa fa-google-plus" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/livspace" target="_blank" className="img img-circle">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="http://instagram.com/livspace" target="_blank" className="img img-circle">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.pinterest.com/livspace" target="_blank" className="img img-circle">
                                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default OurWork;