import React, { Component } from 'react';
import CardList from '../rooms/js/cardList';

class Bedroom extends Component {
    constructor() {
        super();
        this.products=[
            {name: "Agnes Straight Modular Kitchen (Agnes Straight Modular Kitchen)" , imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Blushing Florals (Blushing Florals) ", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "blushing-blorals"},
            {name: "Under The Horizon (Under The Horizon)", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "Under The Horizon"},
            {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "Scarlet Parallel Modular Kitchen"},
            {name: "Blushing Florals (Blushing Florals) ", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "Blushing Florals"},
            {name: "Under The Horizon (Under The Horizon)", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Blushing Florals (Blushing Florals) ", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Under The Horizon (Under The Horizon)", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "/images/construction/apartment-bed-bedroom-271624.jpg", linkTo: "scarlet-parallel-modular-kitchen"},
            ]
    }
    render() {
        return (
            <CardList products={this.products} heading={"Bedrooms Suggested for you"} href="/bedrooms/"/>
        );
    }
}

export default Bedroom;