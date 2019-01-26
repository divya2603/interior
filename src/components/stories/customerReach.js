import React, { Component } from 'react';
import Slider from '../carousal/slider';

class CustomerReach extends Component {
    constructor() {
        super();
    }

    createSlides(){
        let slidesHtml = [
            "/images/interior/antique-art-books-1099816.jpg",
            "/images/interior/apartment-architecture-ceiling-261045.jpg",
            "/images/interior/architecture-bathroom-contemporary-280209.jpg",
            "/images/interior/contemporary-decoration-design-1090638.jpg",
            "/images/interior/background-creativity-decoration-587441.jpg"
        ];
        return slidesHtml;
    }

    render() {
        return(
            <div id="stories">
                <div className="container">
                    <h2 className="home-sub-heading">5000+ happy customers</h2>
                    <p className="home-sub-text">They’ve loved us and so will you!</p>
                    <div className="carousal">
                        <Slider 
                            slides={this.createSlides()}
                            styles={"500px"}
                            transitionEffect={"transform ease-out 0.45s"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerReach;