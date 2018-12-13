import React, { Component } from 'react';
import Card from './js/card';
import NavigationWeb from '../../nav/navigationWeb';
import NavigationMob from '../../nav/navigationMob';
const Image = require('../../homepage/banner/logo.png');

class Rooms extends Component {
    constructor() {
        super();
        this.products=[{name: "Agnes Straight Modular Kitchen (Agnes Straight Modular Kitchen)" , imageSrc: "https://cdn.livspace.com/55502-thickbox/kitchen.jpg",},
        {name: "Blushing Florals (Blushing Florals) ", imageSrc: "https://cdn.livspace.com/55501-thickbox/dining-room.jpg"},
        {name: "Under The Horizon (Under The Horizon)", imageSrc: "https://cdn.livspace.com/55499-thickbox/living-room.jpg"},
        {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "https://cdn.livspace.com/55497-thickbox/kitchen.jpg"},
        {name: "Blushing Florals (Blushing Florals) ", imageSrc: "https://cdn.livspace.com/55501-thickbox/dining-room.jpg"},
        {name: "Under The Horizon (Under The Horizon)", imageSrc: "https://cdn.livspace.com/55499-thickbox/living-room.jpg"},
        {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "https://cdn.livspace.com/55497-thickbox/kitchen.jpg"},
        {name: "Blushing Florals (Blushing Florals) ", imageSrc: "https://cdn.livspace.com/55501-thickbox/dining-room.jpg"},
        {name: "Under The Horizon (Under The Horizon)", imageSrc: "https://cdn.livspace.com/55499-thickbox/living-room.jpg"},
        {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "https://cdn.livspace.com/55497-thickbox/kitchen.jpg"},
    ]
    }
    render() {
        return (
            <div className="rooms">
                <div id="home-page-header" className="page-header">
                    <NavigationWeb logo={Image} {...this.props}/>
                    <NavigationMob logo={Image} {...this.props} />
                </div>
                <div className="comp  rooms-container container">
                    <h1 className="heading">Rooms Suggested for you</h1>
                    <div className="row clearfix">
                        {this.products.map(item => <Card name={item.name} imageSrc={item.imageSrc}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Rooms;