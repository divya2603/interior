import React, { Component } from 'react';
import NavigationWeb from '../../nav/navigationWeb'
import NavigationMob from '../../nav/navigationMob'
import OverlayCard from './overlayCard'
import Footer from '../../footer/ourWork'
import EnquiryForm from '../../form/enquiryForm'

class TopTile extends Component {
  render() {
    return (
      	<section id="home-page">
		    {/* banner section --> */}
            <section id="home-banner">
                <header id="banner">
                    <div className="container">
                        <div className="row">
                            <div className="banner-bg-img">
                                <img src="https://cdn.livmatrix.com/ls_image/360772/index-new-bg.png" className="img-responsive banner" alt="banner" srcSet=""/>
                            </div>
                            <div id="home-page-header">
                                <NavigationWeb {...this.props}/>
                            </div>
                            {/* banner content */}
                            <div className="banner-content">
                                <OverlayCard heading={"Construction"} text={"Perfect interiors for your complete home"} btnText={"Get started"}/>
                                <OverlayCard heading={"Interior Designs"} text={"Perfect interiors for your complete home"} btnText={"Get started"} />
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            <EnquiryForm />
            <div className="cd-overlay"></div>
            {/* navigation strip topmost --> */}
            {/* <NavigationMob {...this.props}/>
            <div id="dummy">&nbsp;</div> */}
            <Footer />
	</section>
    );
  }
}

export default TopTile;