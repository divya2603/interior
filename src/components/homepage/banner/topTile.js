import React, { Component } from 'react';
import NavigationWeb from '../../nav/navigationWeb'
import NavigationMob from '../../nav/navigationMob'
import OverlayCard from './overlayCard'
import Footer from '../../footer/ourWork'
import EnquiryForm from '../../form/enquiryForm'
import CustomerReach from '../../stories/customerReach'
import Slider from '../../carousal/slider'
import DesignCenters from '../../services/designCenters'
import Design from '../../services/design'
import Services from '../../services/services'
const Image = require('./logo.png');

class TopTile extends Component {
    constructor(props) {
        super();
        const setOnInnerWidth = window.innerWidth <= 768 ? true : false;
        this.state = {clicked : setOnInnerWidth}
        this.handleClick = this.handleClick.bind(this);
        this.slidesArray = 
            [
                "/images/interior/antique-art-books-1099816.jpg",
                "/images/interior/apartment-architecture-ceiling-261045.jpg",
                "/images/interior/architecture-bathroom-contemporary-280209.jpg",
                "/images/interior/contemporary-decoration-design-1090638.jpg",
                "/images/interior/background-creativity-decoration-587441.jpg",
            ]
        
    }

    handleClick(e) {
        e.preventDefault();
         this.setState({clicked : true})
    }

    componentWillUnmount() {
        this.isCancelled = true;
    }

    render() {
        //const setStylesOnInnerWidth = window.innerWidth <= 768 ? "100vh" : "90vh";
        if(!this.isCancelled) {
            return (
                <section id="home-page" className={this.state.clicked ? 'show-section' : 'hide-section'}>
                    {/* banner section --> */}
                    <section id="home-banner">
                        <header id="banner">
                            <div className="container">
                                <div className="row">
                                    <div className="banner-bg-img">
                                        <Slider 
                                            slides={this.slidesArray} 
                                            slideDuration ={5000} 
                                            transitionEffect = {'transform ease-in 2s'}
                                            autoSlide={true}
                                            styles={"90vh"}
                                        />
                                        {/* <img src="https://cdn.livmatrix.com/ls_image/360772/index-new-bg.png" className="img-responsive banner" alt="banner" srcSet=""/> */}
                                    </div>
                                    <div id="home-page-header">
                                        <NavigationWeb logo={Image} {...this.props}/>
                                        <NavigationMob logo={Image} {...this.props} />
                                    </div>
                                    {/* banner content */}
                                    <div className="banner-content">
                                        <OverlayCard heading={"Construction"} text={"Perfect interiors for your complete home"} btnText={"Get started"}/>
                                        <OverlayCard heading={"Interior Designs"} text={"Perfect interiors for your complete home"} btnText={"Get started"} />
                                    </div>
                                </div>
                            </div>
                        </header>
                    </section>
                    <EnquiryForm />
                    <div className="cd-overlay"></div>
                    {/* navigation strip topmost --> */}
                    {/* <NavigationMob {...this.props}/>
                    <div id="dummy">&nbsp;</div> */}
                    <CustomerReach />
                    <Design/>
                    <Services />
                    <DesignCenters heading={"Visit our Design Center"} 
                        subtext={"Seeing is believing.Touch, feel and get the Livspace experience in your city."}
                        btnText={"Locate us"}
                        imageUrl={"http://imgs.livmatrix.com/ls_image/647933/design-center.png"}
                    />
                    <div className={this.state.clicked ? "hidden" : "downArrow bounce"} onClick={this.handleClick}>
                        <div className="fa fa-angle-double-down"></div>
                    </div>
                    <Footer />
                </section>
            );   
        }
    }
}

export default TopTile;