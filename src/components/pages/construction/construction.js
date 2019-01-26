import React, { Component } from 'react';
import CardList from '../rooms/js/cardList';

class Construction extends Component {
    constructor() {
        super();
        this.products=[
            {name: "Apartment Architectural Design" , imageSrc: "/images/construction/apartment-architectural-design-architecture-323774.jpg", linkTo: "apartment-architectural-design"},
            {name: "Apartments Architecture Building ", imageSrc: "/images/construction/apartments-architecture-building-103597.jpg", linkTo: "apartments-architecture-building"},
            {name: "Architect Architecture Blueprint", imageSrc: "/images/construction/architect-architecture-blueprint-271667.jpg", linkTo: "architect-architecture-blueprint"},
            {name: "Apartment Architectural Design", imageSrc: "/images/construction/apartment-architectural-design-architecture-323775.jpg", linkTo: "apartment-architectural-design2"},
            {name: "Apartments Architecture Building ", imageSrc: "/images/construction/architectural-architecture-building-816198.jpg", linkTo: "architectural-architecture-building"},
            {name: "Balcony Building", imageSrc: "/images/construction/architecture-balcony-building-534182.jpg", linkTo: "architecture-balcony-building"},
            {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "/images/construction/architecture-beautiful-exterior-106399.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Architecture Building Construction ", imageSrc: "/images/construction/architecture-building-construction-53610.jpg", linkTo: "architecture-building-construction"},
            {name: "Under The Horizon (Under The Horizon)", imageSrc: "/images/construction/apartment-balcony-building-271689.jpg", linkTo: "apartment-balcony-building"},
            {name: "Apartment Architechture Design", imageSrc: "/images/construction/apartments-architectural-design-architecture-583516.jpg", linkTo: "apartments-architectural-design-architecture"},
            {name: "Building Daylight", imageSrc: "/images/construction/architecture-building-daylight-206172.jpg", linkTo: "architecture-building-daylight"},
            {name: "Board Build Carpentry",imageSrc: "/images/construction/board-build-carpentry-1598213.jpg", linkTo: "board-build-carpentry"}
            ]
    }
    render() {
        return (
            <CardList products={this.products} heading={"Construction Projects Delivered By Us "} href="/construction/"/>
        );
    }
}

export default Construction;