import React, { Component } from 'react';
import Card from './card';
import NavigationWeb from '../../../nav/navigationWeb';
import NavigationMob from '../../../nav/navigationMob';
const Image = require('../../../homepage/banner/logo.png');

class CardList extends Component {
    constructor() {
        super();   
    }
    render() {
        return (
            <div className="rooms">
                <div id="home-page-header" className="page-header">
                    <NavigationWeb logo={Image} {...this.props}/>
                    <NavigationMob logo={Image} {...this.props} />
                </div>
                <div className="comp  rooms-container container">
                    <h1 className="heading">{this.props.heading}</h1>
                    <div className="row clearfix">
                        {this.props.products.map((item, index) => <Card name={item.name} logo={Image} imageSrc={item.imageSrc} key={index} linkTo={this.props.href+item.linkTo}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardList;