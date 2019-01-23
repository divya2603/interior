import React, { Component } from 'react';
import CardList from '../rooms/js/cardList';

class Bedroom extends Component {
    constructor() {
        super();
        this.products=[
            {name: "Agnes Straight Modular Kitchen (Agnes Straight Modular Kitchen)" , imageSrc: "https://cdn.livspace.com/55502-thickbox/kitchen.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Blushing Florals (Blushing Florals) ", imageSrc: "https://cdn.livspace.com/55501-thickbox/dining-room.jpg", linkTo: "blushing-blorals"},
            {name: "Under The Horizon (Under The Horizon)", imageSrc: "https://cdn.livspace.com/55499-thickbox/living-room.jpg", linkTo: "Under The Horizon"},
            {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "https://cdn.livspace.com/55497-thickbox/kitchen.jpg", linkTo: "Scarlet Parallel Modular Kitchen"},
            {name: "Blushing Florals (Blushing Florals) ", imageSrc: "https://cdn.livspace.com/55501-thickbox/dining-room.jpg", linkTo: "Blushing Florals"},
            {name: "Under The Horizon (Under The Horizon)", imageSrc: "https://cdn.livspace.com/55499-thickbox/living-room.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "https://cdn.livspace.com/55497-thickbox/kitchen.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Blushing Florals (Blushing Florals) ", imageSrc: "https://cdn.livspace.com/55501-thickbox/dining-room.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Under The Horizon (Under The Horizon)", imageSrc: "https://cdn.livspace.com/55499-thickbox/living-room.jpg", linkTo: "agnes-straight-modular-kitchen"},
            {name: "Scarlet Parallel Modular Kitchen(Scarlet Parallel Modular Kitchen)", imageSrc: "https://cdn.livspace.com/55497-thickbox/kitchen.jpg", linkTo: "scarlet-parallel-modular-kitchen"},
            ]
    }
    render() {
        return (
            <CardList products={this.products} heading={"Bedrooms Suggested for you"} href="/bedrooms/"/>
        );
    }
}

export default Bedroom;