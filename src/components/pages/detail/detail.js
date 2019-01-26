import React, { Component } from 'react';
import NavigationWeb from '../../nav/navigationWeb';
import NavigationMob from '../../nav/navigationMob';
const Image = require('../../homepage/banner/logo.png');

class Detail extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="detail">
                <div id="home-page-header" className="page-header">
                    <NavigationWeb logo={Image} {...this.props}/>
                    <NavigationMob logo={Image} {...this.props} />
                </div>
                <div className="detail-container">
                    <div className="left-container ">
                        <img className="img-responsive" src="https://cdn.livspace.com/55497-thickbox/kitchen.jpg"/>
                    </div>
                    <div className="detail-content right-container">
                        <h1 className="product-name">Living Space</h1>
                        <div className="desc">Rooms Suggested for youRooms Suggested for youRooms Suggested for youRooms Suggested for you</div>
                        <a className="btn pink-btn" href="/consult">Book a designer</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;