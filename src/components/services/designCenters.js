
import React, { Component } from 'react';

class DesignCenters extends Component {
    render() {
        return (
            {/* Design centers --> */}
            <section id="locate-design-centers" className="comp comp-centers">
                <div className="container">
                    <div className="wrapper clearfix">
                        <aside>
                            <h2 className="home-sub-heading">Visit our Design Center</h2>
                            <p className="home-sub-text">
                                Seeing is believing.
                            </p>
                            <p className="home-sub-text">
                                Touch, feel and get the Livspace experience in your city.
                            </p>
                            <a href="/design-centers" className="home-sub-link">Locate us</a>
                        </aside>
                        <figure>
                            <img alt="Locate us" className="img-responsive" src="http://imgs.livmatrix.com/ls_image/647933/design-center.png" />
                        </figure>
                    </div>
                </div>
            </section>
        );
    }
}
           
export default DesignCenters;