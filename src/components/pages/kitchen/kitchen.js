import React, { Component } from 'react';
import CardList from '../rooms/js/cardList';

class Kitchen extends Component {
    constructor() {
        super();
        this.products=[
            {name: "Brooke Lark Unsplash" , imageSrc: "/images/kitchen/brooke-lark-191659-unsplash.jpg", linkTo: "brooke-lark-unsplash"},
            {name: "Ellen Auer Unsplash ", imageSrc: "/images/kitchen/ellen-auer-708106-unsplash.jpg", linkTo: "ellen-auer-unsplash"},
            {name: "Jason Briscoe Unsplash", imageSrc: "/images/kitchen/jason-briscoe-332507-unsplash.jpg", linkTo: "jason-briscoe-unsplash"},
            {name: "Jason Leung Unsplash", imageSrc: "/images/kitchen/jason-leung-490668-unsplash.jpg", linkTo: "jason-leung-unsplash"},
            {name: "Smith Unsplash ", imageSrc: "/images/kitchen/katie-smith-104748-unsplash.jpg", linkTo: "katie-smith-unsplash"},
            {name: "Rohan Unsplash", imageSrc: "/images/kitchen/rohan-g-803060-unsplash.jpg", linkTo: "rohan-unsplash"},
            {name: "Heftiba Unsplash", imageSrc: "/images/kitchen/toa-heftiba-530185-unsplash.jpg", linkTo: "toa-heftiba-530185-unsplash"},
            {name: "Quackenbush Unsplash ", imageSrc: "/images/kitchen/todd-quackenbush-700-unsplash.jpg", linkTo: "todd-quackenbush-unsplash"}
            ]
    }
    render() {
        return (
            <CardList products={this.products} heading={"Kitchen Designs for you"} href="/kitchen/"/>
        );
    }
}

export default Kitchen;