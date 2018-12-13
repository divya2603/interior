
import React, { Component } from 'react';

class DesignCenters extends Component {
    render() {
        return (
            <section id="locate-design-centers" className="comp comp-centers">
                <div className="container">
                    <div className="wrapper clearfix">
                        <aside>
                            <h2 className="home-sub-heading">{this.props.heading}</h2>
                            <p className="home-sub-text">
                                {this.props.subtext}
                            </p>
                            <a href="/design-centers" className="home-sub-link">{this.props.btnText}</a>
                        </aside>
                        <figure>
                            <img alt="Locate us" className="img-responsive" src={this.props.imageUrl} />
                        </figure>
                    </div>
                </div>
            </section>
        );
    }
}
           
export default DesignCenters;