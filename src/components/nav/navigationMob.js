import React, { Component } from 'react';

//navigation strip topmost
class NavigationMob extends Component {
  render() {
    return (
        <nav id="navbar" className="navbar hidden" >
            <div className="container">
                <div className="row">
                    <div className="header-section clearfix">
                        {/* logo */}
                        <div className="logo-section">
                            <div className="logo">
                                <a href="/">
                                    <img className="img-responsive pull-left" src="https://imgs.livmatrix.com/ls_image/823637/Livspace-logo-black.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        {/* hamburger */}
                        <div className="hamburger">
                            <div className="nav-icon pull-right">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
  }
}

export default NavigationMob;