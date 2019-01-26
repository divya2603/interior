import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
        <div className="col-md-6 col-sm-12">
            <div className="room-tile">
                <div className="room-tile-image">
                    <Link to={this.props.linkTo}>
                        <i className="fa fa-heart-o"></i>
                        <img src={this.props.imageSrc} className="img-responsive" alt="room"/>
                        <div className="sticker">
                            <img className="img-responsive" src={this.props.logo}/>
                        </div>
                        <div className="product-card-wrap">
                            <div className="product-info">
                                <div className="product-name">{this.props.name}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Card;