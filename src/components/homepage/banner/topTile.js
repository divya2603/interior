import React, { Component } from 'react';
import NavigationWeb from '../../nav/navigationWeb'
import NavigationMob from '../../nav/navigationMob'
import OverlayCard from './overlayCard'
import Footer from '../../footer/ourWork'
import EnquiryForm from '../../form/enquiryForm'
import CustomerReach from '../../stories/customerReach'
import Slider from '../../carousal/slider'
const Image = require('./logo.png');

class TopTile extends Component {
    constructor(props) {
        super();
        const setOnInnerWidth = window.innerWidth <= 768 ? true : false;
        this.state = {clicked : setOnInnerWidth}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({clicked : true})
    }

    slidesArray() {
        return [
            "https://cdn.livmatrix.com/ls_image/360772/index-new-bg.png",
            "https://cdn.livmatrix.com/55592-thickbox/living-room.jpg",
            "https://cdn.livmatrix.com/55510-thickbox/study-room.jpg",
            "http://cdn.livspace.com/55502-thickbox/kitchen.jpg",
            "https://cdn.livmatrix.com/ls_image/360772/index-new-bg.png",
        ];
    }

    render() {
        //const setStylesOnInnerWidth = window.innerWidth <= 768 ? "100vh" : "90vh";
        return (
            <section id="home-page" className={this.state.clicked ? 'show-section' : 'hide-section'}>
                {/* banner section --> */}
                <section id="home-banner">
                    <header id="banner">
                        <div className="container">
                            <div className="row">
                                <div className="banner-bg-img">
                                    <Slider 
                                        slides={this.slidesArray()} 
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
                <div className={this.state.clicked ? "hidden" : "downArrow bounce"} onClick={this.handleClick}>
                    <div className="fa fa-angle-double-down"></div>
                </div>
                <Footer />
            </section>
        );
    }
}

export default TopTile;