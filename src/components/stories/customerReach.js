import React, { Component } from 'react';
import Slider from '../carousal/slider';

class CustomerReach extends Component {
    constructor() {
        super();
    }

    createSlides(){
        let slidesHtml = [
            "https://cdn.livmatrix.com/55592-thickbox/living-room.jpg",
            "https://cdn.livmatrix.com/55576-thickbox/living-room.jpg",
            "https://cdn.livmatrix.com/55516-thickbox/living-room.jpg",
            "https://cdn.livmatrix.com/55510-thickbox/study-room.jpg",
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
                <div className="container">
                    <h2 className="home-sub-heading">5000+ happy customers</h2>
                    <p className="home-sub-text">They’ve loved us and so will you!</p>
                    <div className="carousal">
                        <Slider slides={this.createSlides()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerReach;