import React, { Component } from 'react';

class Design extends Component {
    render() {
      return (
        <section id="design" className="comp comp-design">
            <h2 className="text-center sub-heading">Home design made easy</h2>
            <ul className="design-content">
                <li>
                    <img src="https://imgs.livmatrix.com/ls_image/841720/chat.png" alt="" />
                    <h5>Meet your designer <span className="no-visibility">(design-team)</span></h5>
                    <div className="line-right"></div>
                </li>
                <li>
                    <div className="line-left"></div>
                    <img src="https://imgs.livmatrix.com/ls_image/841532/3d.png" alt="" />
                    <h5>Get personalized design options</h5>
                    <div className="line-right"></div>
                </li>
                <li>
                    <div className="line-left"></div>
                    <img src="https://imgs.livmatrix.com/ls_image/841774/order.png" alt="" />
                    <h5>Review, collaborate & order</h5>
                    <div className="line-right"></div>
                </li>
                <li>
                    <div className="line-left"></div>
                    <img src="http://imgs.livmatrix.com/ls_image/841749/delivery.png" alt="" />
                    <h5>Get interiors installed by experts</h5>
                </li>	
            </ul>
            <a className="sub-link" href="/how-it-works">
                See how it works <span> <i className="glyphicon glyphicon-triangle-right"></i></span>
            </a>
        </section>
      );
    }
  }
  
  export default Design;