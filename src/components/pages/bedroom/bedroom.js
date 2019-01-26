import React, { Component } from 'react';
import CardList from '../rooms/js/cardList';

class Bedroom extends Component {
    constructor() {
        super();
        this.products=[
            {name: "Bed Bedroom" , imageSrc: "/images/bedroom/apartment-bed-bedroom-271624.jpg", linkTo: "apartment-bed-bedroom"},
            {name: "Apartment Bed Bedroom ", imageSrc: "/images/bedroom/apartment-bed-bedroom-439227.jpg", linkTo: "apartment-bed-bedroom2"},
            {name: "Architecture Bed Bedroom", imageSrc: "/images/bedroom/architecture-bed-bedroom-237371.jpg", linkTo: "architecture-bed-bedroom"},
            {name: "Architecture Bed Bedroom", imageSrc: "/images/bedroom/architecture-bed-bedroom-1454806.jpg", linkTo: "architecture-bed-bedroom2"},
            {name: "Balcony Bed Bedroom ", imageSrc: "/images/bedroom/balcony-bed-bedroom-210604.jpg", linkTo: "balcony-bed-bedroom"},
            {name: "Bed Bedroom Blanket", imageSrc: "/images/bedroom/bed-bedroom-blanket-1457845.jpg", linkTo: "bed-bedroom-blanket"},
            {name: "Bedroom Carpet", imageSrc: "/images/bedroom/bed-bedroom-carpet-90317.jpg", linkTo: "bed-bedroom-carpet2"},
            {name: "Bed Bedroom Ceiling ", imageSrc: "/images/bedroom/bed-bedroom-ceiling-262048.jpg", linkTo: "bed-bedroom-ceiling"},
            {name: "Bed Bedroom Chair", imageSrc: "/images/bedroom/bed-bedroom-chair-707581.jpg", linkTo: "bed-bedroom-chair"},
            {name: "Bed Bedroom Contemporary", imageSrc: "/images/bedroom/bed-bedroom-contemporary-1267438.jpg", linkTo: "bed-bedroom-contemporary"},
            ]
    }
    render() {
        return (
            <CardList products={this.products} heading={"Bedrooms Suggested for you"} href="/bedrooms/"/>
        );
    }
}

export default Bedroom;