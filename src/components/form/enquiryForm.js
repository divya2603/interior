import React, { Component } from 'react';

class EnquiryForm extends Component {
    render() {
        return (
            <div className="modal fade in" id="myModalneo" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog custom-model">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close ss-close-modal-btn" data-dismiss="modal" aria-label="Close"></button>          
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
                                        <div className="col-sm-offset-3 col-sm-6">
                                        <button id="send" className="btn btn-sm but-submit">Submit</button>
                                        <label id="sending" ><em>sending...</em></label>
                                        <input type="hidden" name="prod_id" id="prod_id" value="neo" />
                                        </div>
                                    </div>
                                </form>                   
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        )
    }
  }
  
  export default EnquiryForm;