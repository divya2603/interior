import React, { Component } from 'react';
import Slider from '../carousal/slider';

class CustomerReach extends Component {
    constructor() {
        super();
    }

    createSlides(){
        let slidesHtml = [
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
        ];
        return slidesHtml;
    }

    render() {
        return(
            <div id="stories">
                <div class="container">
                    <h2 class="home-sub-heading">5000+ happy customers</h2>
                    <p class="home-sub-text">They’ve loved us and so will you!</p>
                    <div className="carousal">
                        <Slider slides={this.createSlides()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerReach;