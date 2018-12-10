import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="room-tile">
                <div className="room-tile-image">
                    <a href="">
                        <i class="fa fa-heart-o"></i>
                        <img src={this.props.imageSrc} className="img-responsive" alt="room"/>
                        <div className="sticker">
                            <img className="img-responsive" src="https://cdn.livmatrix.com//img/logos/ruby/livspace-square.png"/>
                        </div>
                        <div className="product-card-wrap">
                            <div className="product-info">
                                <div className="product-name">{this.props.name}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default Card;