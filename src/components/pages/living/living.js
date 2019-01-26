import React, { Component } from 'react';
import CardList from '../rooms/js/cardList';

class Living extends Component {
    constructor() {
        super();
        console.log("living");
        this.products=[
            {name: "Backsplash Cabinets" , imageSrc: "/images/living/wtc-backsplash-cabinets-1439710.jpg", linkTo: "wtc-backsplash-cabinets"},
            {name: "Apartment Architecture Armchair ", imageSrc: "/images/living/apartment-architecture-armchair-271805.jpg", linkTo: "apartment-architecture-armchair"},
            {name: "Ceiling Clean Contemporary", imageSrc: "/images/living/ceiling-clean-contemporary-1457842.jpg", linkTo: "ceiling-clean-contemporary"},
            {name: "Chair Contemporary Couch", imageSrc: "/images/living/chair-contemporary-couch-1571470.jpg", linkTo: "chair-contemporary-couch"},
            {name: "Furnitures House Living-room ", imageSrc: "/images/living/furnitures-house-living-room-77931.jpg", linkTo: "furnitures-house-living-room"},
            {name: "Bookcase Chairs Clean", imageSrc: "/images/living/bookcase-chairs-clean-667838.jpg", linkTo: "bookcase-chairs-clean"},
            {name: "Apartment Ceiling Chairs", imageSrc: "/images/living/apartment-ceiling-chairs-1571460.jpg", linkTo: "apartment-ceiling-chairs"},
            {name: "Apartment Chair ", imageSrc: "/images/living/apartment-chair-clean-276686.jpg", linkTo: "apartment-chair-clean"},
            {name: "Apartment Chair Couch", imageSrc: "/images/living/apartment-chair-couch-276715.jpg", linkTo: "apartment-chair-couch"},
            {name: "Apartment Scarlet ", imageSrc: "/images/living/apartment-clean-condominium-279719.jpg", linkTo: "apartment-clean-condominium"},
            ]
    }
    render() {
        return (
            <CardList products={this.products} heading={"Living-Space Suggested for you"} href="/living/"/>
        );
    }
}

export default Living;