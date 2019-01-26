import React, { Component } from 'react';
import CardList from '../rooms/js/cardList';

class Blogs extends Component {
    constructor() {
        super();
        this.products=[
            {name: "Rune Enstad" , imageSrc: "/images/kitchen/rune-enstad-1090369-unsplash.jpg", linkTo: "rune-enstad-unsplash"},
            {name: "Toa Heftiba Unsplash" , imageSrc: "/images/kitchen/toa-heftiba-616938-unsplash.jpg", linkTo: "toa-heftiba-unsplash"},
            {name: "Victor Rodriguez" , imageSrc: "/images/kitchen/victor-rodriguez-738808-unsplash.jpg", linkTo: "victor-rodriguez-unsplash"},
            {name: "Nick Karvounis" , imageSrc: "/images/kitchen/nick-karvounis-538864-unsplash.jpg", linkTo: "nick-karvounis-unsplash"},
            {name: "Hamed Alishahi Unsplashh" , imageSrc: "/images/kitchen/hamed-alishahi-1108451-unsplash.jpg", linkTo: "hamed-alishahi-unsplashh"},
            {name: "Alishahi Unsplash " , imageSrc: "/images/kitchen/hamed-alishahi-1188239-unsplash.jpg", linkTo: "alishahi-unsplash"},
            {name: "Mediterranean Homes" , imageSrc: "/images/kitchen/ialicante-mediterranean-homes-475723-unsplash.jpg", linkTo: "mediterranean-homes-475723-unsplash"},
            {name: "Iialicante Mediterranean Homes" , imageSrc: "/images/kitchen/ialicante-mediterranean-homes-475751-unsplash.jpg", linkTo: "ialicante-mediterranean-homes-unsplash"},
            {name: "Jose Soriano" , imageSrc: "/images/kitchen/jose-soriano-1230133-unsplash.jpg", linkTo: "jose-soriano-unsplash"},
            {name: "Naomi Hebert Unsplash" , imageSrc: "/images/kitchen/naomi-hebert-188443-unsplash.jpg", linkTo: "naomi-hebert-unsplash"},
            ]
    }
    render() {
        return (
            <CardList products={this.products} heading={"Dining Room Designs"} href="/dining-rooms/" />
        );
    }
}

export default Blogs;