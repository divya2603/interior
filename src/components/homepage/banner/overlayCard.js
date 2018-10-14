import React, { Component } from 'react';

class OverlayCard extends Component {
    render() {
      return (
        <div className="card text-center">
            <div className="card-wrapper">
                <h1 className="fade-down">{this.props.heading}</h1>
                <p className="fade-down">{this.props.text}</p>
                <a href="/" className="white-btn fade-down">{this.props.btnText}</a>
            </div>
        </div>
      );
    }
  }
  
  export default OverlayCard;