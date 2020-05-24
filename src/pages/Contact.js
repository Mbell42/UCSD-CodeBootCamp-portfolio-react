import React, { Component } from 'react';
import "./style.css";

class Contact extends Component {
  render() {
    return (
      <div>
        {/* PAGE CONTAINER */}
        <div className="container bg">
          {/* Background containing background from Toptal Subtle Patterns; fills the space from the Header to the Footer.  */}
          {/* This Background is identical for each page. */}
          <main role="main" className="flex-shrink-0">
            {/* Top Blank Space */}
            <row className="row">
              <div className="col-lg col-md col-sm">&nbsp;</div>
            </row>
            {/* Foreground section that contains main content for the page. */}
            <row className="row">   
              {/* <div class="col-md-2">&nbsp;</div> */}
              {/* Main Panel */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="panel">
                  <row className="row">
                    <div className="col-lg col-md col-sm">
                      <h2 className="panel-heading text-center">Contact Me</h2>
                      <hr />
                    </div>
                  </row>
                  <row className="row">
                    {/* <div class="col-md-1">&nbsp;</div> */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="submitForm">
                        <form className="input-group">
                          <span className="input-group-addon basic-addon1">Name:</span>
                          <input className="form-control myForm" id="nameInput" type="text" name="Name" placeholder="Example Name" />
                        </form>
                        <form className="input-group">
                          <span className="input-group-addon basic-addon1">Email:</span>
                          <input className="form-control myForm" id="emailInput" type="text" name="Email" placeholder="Example@yahoo.com" />
                        </form>
                        <form className="input-group">
                          <span className="input-group-addon basic-addon1">Message:</span>
                          <input className="form-control myForm" id="formMessage" type="text" name="Message" placeholder="Input message here..." />
                        </form>
                      </div>
                    </div>
                    {/* <div class="col-md-1">&nbsp;</div> */}
                  </row>
                  {/* This is the Submit button for the above form. */}
                  <row className="row">
                    {/* <div class="col-md-1">&nbsp;</div> */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="formButton">
                        <div className="btn-group" role="group">
                          <button type="button" className="btn btn-default" id="submitButton">Submit</button>
                        </div>
                      </div>       
                    </div>
                    {/* <div class="col-md-3">&nbsp;</div> */}
                    {/* These are contact details. */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <p className="text-center contactText">
                        email: matthewbell1030@gmail.com
                      </p>
                    </div>
                    {/* <div class="col-md-1">&nbsp;</div> */}
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <p className="text-center contactText">
                        phone: 858-922-5440
                      </p>
                    </div>
                    {/* <div class="col-md-1">&nbsp;</div> */}
                  </row>
                </div>
              </div>
              {/* <div class="col-md-2">&nbsp;</div> */}
            </row>
            {/* Bottom Blank Space */}
            <row className="row">
              <div className="col-lg col-md col-sm">&nbsp;</div>
            </row>
          </main>
          {/* END PAGE CONTAINER */}
        </div>
        {/* FOOTER SECTION */}
        {/* This footer is identical for each page. */}
        <footer className="py-5 footer">
          <div className="container">
            <row className="row">
              <div className="col-lg col-md col-sm">
                <p className="text-center">
                  <span className="footerText">matthewbell1030@gmail.com<br />phone: 858-922-5440<br />Copyright ©</span>
                </p>   
              </div>
            </row>
          </div>
          {/* END FOOTER SECTION*/}
        </footer>
      </div>
    );
  }
};

export default Contact;