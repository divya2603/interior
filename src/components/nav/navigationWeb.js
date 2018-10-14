import React, { Component } from 'react';

//navigation strip topmost
class NavigationMob extends Component {

    looksDropdown() {
        return(
            <div className="navbar-link-drop-down clearfix">
                <div className="five-column-row clearfix" id="all-looks-home">
                    <h4 className="text-left">All Looks</h4>
                    <a href="/living-rooms">
                        <div className="column">
                            <div className="thumbnail ls__thumbnail">
                                <img src="https://cdn.livmatrix.com/33243-thickbox/morning-glory.jpg" alt="" className="lazy" />
                                <div className="caption text-center">
                                    <h5>Living room</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/bedrooms">
                        <div className="column">
                            <div className="thumbnail ls__thumbnail">
                                <img src="https://cdn.livmatrix.com/33988-thickbox/ornate-splendour.jpg" alt="" className="lazy" />
                                <div className="caption text-center">
                                    <h5>Bedroom</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/dining-rooms">
                        <div className="column">
                            <div className="thumbnail ls__thumbnail">
                                <img src="https://cdn.livmatrix.com/50156-thickbox/20160201srikanthdr1c1v2ar.jpg" alt="" className="lazy" />
                                <div className="caption text-center">
                                    <h5>Dining room</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/kitchen-designs">
                        <div className="column">
                            <div className="thumbnail ls__thumbnail">
                                <img src="https://cdn.livmatrix.com/43435-thickbox/clockwork-orange-u-shape-kitchen.jpg" alt="" className="lazy" />
                                <div className="caption text-center">
                                    <h5>Modular kitchen</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/wardrobe-designs">
                        <div className="column">
                            <div className="thumbnail ls__thumbnail">
                                <img src="https://cdn.livmatrix.com/43464-thickbox/scandinavian-wardrobes-011.jpg" alt=""  className="lazy" />
                                <div className="caption text-center">
                                    <h5>Modular wardrobe </h5>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="container nav-container">
                <div className="main-navbar text-center">
                    <ul className="list-inline">
                        {/* Livspace logo --> */}
                        <li className="pull-left text-left home-main-nav-link">
                            <a href="/">
                                <img src="https://cdn.livmatrix.com/ls_image/663887/logo3.png" alt="Livspace.com logo" height="28"/>
                            </a>
                        </li>
                        {/* Looks dropdown --> */}
                        <li className="home-main-nav-link looks">
                            <a href="/rooms" className="text-uppercase" >Interior Design</a>
                            <div className="link-identifier"></div>
                            {this.looksDropdown()}
                        </li>

                        {/* Construction dropdown --> */}
                        <li className="home-main-nav-link construction">
                            <a href="/custom-modular-kitchens" className="text-uppercase">Construction</a>
                            <div className="link-identifier"></div>
                            {/*  dropdown starts here --> */}
                            <div className="navbar-link-drop-down clearfix construction-dropdown">
                                <div className="flex-box">
                                    <div className="alt-list">
                                        <div className="alt-drop-down-links">
                                            <ul className="list-unstyled dropDownLinksList text-left">
                                                <li className="">
                                                    <a href="/custom-modular-kitchens" className="firstLevelCategory" styles="font-size: 14px;text-transform: uppercase;color: #333;letter-spacing: 2px;font-weight: bold;">kitchen</a>
                                                    <ul className="dropDownLinksList-sub list-unstyled">
                                                        <li className=""><a href="/kitchen-designs" className="secondLevelCategory">Designs</a></li>
                                                        <li className=""><a href="/know-your-kitchen" className="secondLevelCategory">Know your livspace kitchen</a></li>
                                                        <li className=""><a href="/quality-looks" className="secondLevelCategory">Kitchen Quality</a></li>
                                                        <li className=""><a href="/kitchen-how-it-works" className="secondLevelCategory">How it works</a></li>
                                                        <li className=""><a href="/kitchen-price-calculator" className="secondLevelCategory">Price estimator</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/* <a href="#" className="seeMoreLink">See All Looks</a>--> */}
                                        </div>
                                    </div>
                                    <div className="alt-images">
                                        <div className="three-column-drop-down-image-section">
                                            <div className="three-column-drop-down-image-section-wrap">
                                                <h5 className="text-left image-heading">Trending this week</h5>
                                                <div className="drop-down-image">
                                                    <div className="thumbnail ls__thumbnail">
                                                        <a href="/kitchen_looks/8629">
                                                            <img src="https://cdn.livmatrix.com/43442-thickbox/zane-l-shape-kitchen.jpg" alt="designs" width="300px" className="img-responsive lazy" />
                                                            <div className="caption text-center">
                                                                <h5>Zane L-shape Kitchen</h5>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="drop-down-image">
                                                    <div className="thumbnail ls__thumbnail">
                                                        <a href="/kitchen_looks/8604">
                                                            <img src="https://cdn.livmatrix.com/43425-thickbox/callie-minimalist-l-shape-kitchen.jpg" alt="designs" width="300px" className="img-responsive lazy" />
                                                            <div className="caption text-center">
                                                                <h5>Callie L-shape Kitchen</h5>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="drop-down-image">
                                                    <div className="thumbnail ls__thumbnail">
                                                        <a href="/kitchen_looks/8608">
                                                            <img src="https://cdn.livmatrix.com/43426-thickbox/clover-u-shape-kitchen.jpg" alt="bedrooms" width="300px" className="img-responsive lazy"  />
                                                            <div className="caption text-center">
                                                                <h5>Clover U-shape Kitchen</h5>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Blogs dropdown --> */}
                        <li className="home-main-nav-link blogs">
                            <a href="/magazine" className="text-uppercase">BLOGS</a>
                            <div className="link-identifier"></div>
                            <div className="navbar-link-drop-down clearfix blogs-dropdown">
                                <div className="flex-box">
                                    <div className="alt-list padding-40">
                                        <div className="alt-drop-down-links">
                                            <ul className="list-unstyled dropDownLinksList text-left">
                                                <li className="">
                                                    <a href="/magazine" className="firstLevelCategory" styles="font-size: 14px;text-transform: uppercase;color: #333;letter-spacing: 2px;font-weight: bold;">Magazine</a>
                                                    <ul className="dropDownLinksList-sub list-unstyled">
                                                        <li className=""><a href="/magazine/category/design" className="secondLevelCategory">Designs</a></li>
                                                        <li className=""><a href="/magazine/category/homekeeping" className="secondLevelCategory">Home keeping</a></li>
                                                        <li className=""><a href="/magazine/category/kitchen" className="secondLevelCategory">Kitchen</a></li>
                                                        <li className=""><a href="/magazine/category/livspace-homes" className="secondLevelCategory">Livspace homes</a></li>
                                                        <li className=""><a href="/magazine/category/shopping" className="secondLevelCategory">Shopping</a></li>
                                                        <li className=""><a href="/magazine/category/styling" className="secondLevelCategory">Styling</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            {/* <a href="#" className="seeMoreLink">See All Looks</a>--> */}
                                        </div>
                                    </div>
                                    <div className="alt-images">
                                        <div className="three-column-drop-down-image-section">
                                            <div className="three-column-drop-down-image-section-wrap">
                                                <h5 className="text-left image-heading">Trending this week</h5>
                                                <div className="drop-down-image ">
                                                    <a href="//www.livspace.com/magazine/design-focus-a-gorgeous-paris-style-home-in-mumbai/">
                                                        <div className="thumbnail ls__thumbnail">
                                                            <img src="https://cdn.livmatrix.com/ls_image/837214/Fabulous-Kitchen-Color-Scheme-3-1024x609.jpg" alt="Looks" width="300px" className="img-responsive lazy" styles="min-height:160px;" />
                                                            <div className="caption text-center">
                                                                <h5>
                                                                    Design Focus | A Gorgeous Paris-Style Home in Mumbai
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="drop-down-image">
                                                    <a href="//www.livspace.com/magazine/trends-5-fabulous-color-schemes-for-your-kitchen/">
                                                        <div className="thumbnail ls__thumbnail">
                                                            <img src="https://cdn.livmatrix.com/ls_image/837214/Fabulous-Kitchen-Color-Scheme-3-1024x609.jpg" alt="products" width="300px" className="img-responsive lazy" styles="min-height:160px;" />
                                                            <div className="caption text-center">
                                                                <h5>Trends | 5 Fabulous Color Schemes For Your Kitchen</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="drop-down-image">
                                                    <a href="//www.livspace.com/magazine/buying-guide-how-to-choose-center-tables/">
                                                        <div className="thumbnail ls__thumbnail">
                                                            <img src="https://cdn.livmatrix.com/ls_image/837081/Center-Table-Size.jpg" alt="bedrooms" width="300px" className="img-responsive lazy" styles="min-height:160px;" />
                                                            <div className="caption text-center">
                                                                <h5>Buying Guide | How To Choose Center Tables</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        {/* About us */}
                        <li className="home-main-nav-link ">
                            <a href="/apartments" className="text-uppercase">About Us</a>
                        </li>
                        {/* Contact us --> */}
                        <li className="home-main-nav-link ">
                            <a href="/hire-a-designer" className="text-uppercase">Contact us</a>
                        </li>
                        {/* Sign in  --> */}
                        <li className="home-main-nav-link ">
                            <a href="/how-it-works" className="text-uppercase">Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavigationMob;