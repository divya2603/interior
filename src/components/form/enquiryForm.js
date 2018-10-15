import React, { Component } from 'react';

class EnquiryForm extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {showModal:true}
    }

    handleClick(e) {
        e.preventDefault();
        if(!this.node.contains(e.target) || (e.target.id === "close-btn")) {
            this.setState({showModal:false})
        }
    }

    render() {
        if(this.state.showModal) {
        return (
            <div ref = {node => this.node = node} className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" onClick={this.handleClick} >
                <div className="modal-dialog custom-model" >
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" id="close-btn" className="close ss-close-modal-btn" data-dismiss="modal" aria-label="Close" onClick={this.handleClick}></button>          
                            <div className="center-block" id="enquiry1"> 
                                <h3  className="text-center">Enquire With Us</h3>                
                                <form className="form-horizontal" name="priceEnquiry" id="priceEnquiry" action="" method="post" encType="multipart/form-data" role="form">
                                    <div className="form-group">
                                        <label forhtml="name" className="col-sm-offset-1 col-sm-2 control-label">Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="uname" name="uname" placeholder="Name*" required="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label forhtml="email" className="col-sm-offset-1 col-sm-2 control-label">Email</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email*" required="" />
                                        </div>
                                    </div>  
                                    <div className="form-group">
                                        <label forhtml="name" className="col-sm-offset-1 col-sm-2 control-label">Phone</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone*" required="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label forhtml="email" className="col-sm-offset-1 col-sm-2 control-label">City</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="city" name="city" placeholder="City" required="" />
                                        </div>
                                    </div>                   
                                    <div className="form-group">
                                        <label forhtml="email" className="col-sm-offset-1 col-sm-2 control-label">Message</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" id="message" name="message" placeholder="Please specify your requirements*" required=""></textarea>
                                        </div>
                                    </div>                                    
                                    <div className="form-group">
                                        <button className="col-sm-8 btn-sm but-submit">Submit</button>
                                    </div>
                                </form>                   
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        )} else {
            return null;
        }
    }
  }
  
  export default EnquiryForm;