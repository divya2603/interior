import React, { Component } from 'react';

import NavigationWeb from '../../nav/navigationWeb';
import NavigationMob from '../../nav/navigationMob';
const Image = require('../../homepage/banner/logo.png');

class ConsultDesigner extends Component {
    render() {
        return(
            <div className="rooms">
                <div id="home-page-header" className="page-header">
                    <NavigationWeb logo={Image} {...this.props}/>
                    <NavigationMob logo={Image} {...this.props} />
                    <div className="consult-container container">
                        <div className="clearfix">
                            <div className="header-wrap">
                                <h5>Home Design Made Easy</h5>
                                <p>Full Home interiors | Modular kitchens | Modular wardrobes | Construction</p>
                            </div>
                            <div className="header-form">
                                <div className="content-form">
                                    <div className="form-body" id="form_fixed">
                                        <div className="form-heading">Talk to a designer</div>
                                            <form action="/design-query.php" method="POST" className="form" id="new_form_design_query">
                                                <fieldset>
                                                    <div className="form-element">
                                                        <div className="form-placeholder" id="name_error">Name</div>
                                                        <input type="text" className="text" name="firstname" id="query-firstname" />
                                                    </div>
                                                    <div className="form-element">
                                                        <div className="form-placeholder" id="email_error">E-mail</div>
                                                        <input type="text" className="email" name="email" id="query-email" />
                                                    </div>
                                                    <div className="form-element">
                                                        <div className="form-placeholder" id="mobile_number_error">Mobile</div>
                                                        <input type="text" className="text" name="phone_mobile" id="query-phone_mobile" />
                                                    </div>
                                                    <div className="form-element">
                                                        <div className="form-placeholder">Property Name</div>
                                                        <input type="text" className="text" name="propertyname" id="propertyname" />
                                                    </div>
                                                    <div className="form-element">
                                                        <div className="form-placeholder" id="scope_error">Scope</div>
                                                        <select name="scope" id="scope" className="form-control dropdown">
                                                            <option defaultValue=""></option>
                                                            <option defaultValue="full_home_design">Full Home Design</option>
                                                            <option defaultValue="modular_kitchen">Modular Kitchen</option>
                                                            <option defaultValue="modular_kitchen_wardrobe">Modular Kitchen and Wardrobe</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-element" id="singapore-city">
                                                        <div className="form-placeholder" id="city_error">City</div>
                                                        <select name="city" id="city" className="form-control dropdown">
                                                            <option defaultValue=""></option>
                                                            <option defaultValue="bangalore">Bangalore</option>
                                                            <option defaultValue="delhi">Delhi</option>
                                                            <option defaultValue="ghaziabad">Ghaziabad</option>
                                                            <option defaultValue="gurgaon">Gurgaon</option>
                                                            <option defaultValue="faridabad">Faridabad</option>
                                                            <option defaultValue="noida">Noida</option>
                                                            <option defaultValue="mumbai">Mumbai</option>
                                                            <option defaultValue="navi mumbai">Navi Mumbai</option>
                                                            <option defaultValue="thane">Thane</option>
                                                            <option defaultValue="hyderabad">Hyderabad</option>
                                                            <option defaultValue="chennai">Chennai</option>
                                                            <option defaultValue="pune">Pune</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-element" id="singapore-pin-code">
                                                        <div className="form-placeholder" id="pincode_error">Property Pin Code</div>
                                                        <input type="number" className="form-control text" name="pincode" maxLength="6" id="pincode" />
                                                    </div>
                                                    <div className="form-element">
                                                        <div className="form-placeholder" id="description_error">
                                                            Describe your interior design project
                                                        </div>
                                                        <textarea className="text form-control description" type="text" id="query-note" name="note"></textarea>
                                                    </div>
                                                </fieldset>
                                                <div className="form-submit">
                                                    <input type="hidden" name="landing_page_id" defaultValue="2" />
                                                    <input type="hidden" name="source" defaultValue="fb" />
                                                    <input name="submitQuery" className="btn pink-btn submit-btn" type="submit" defaultValue="Get free quote" />
                                                    <p className="privacy-agreement text-center">By submitting this form, you agree to the
                                                        <a target="_blank" href="/privacy">privacy policy</a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            )
        }
    }

export default ConsultDesigner;