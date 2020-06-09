import React, { Component } from 'react';
import "./style.css";

class About extends Component {
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
            {/* Foreground section that contains page title, and main content for the page. */}
            <row className="row">
              {/* <div class="col-md-2">&nbsp;</div> */}
              {/* Main Panel */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="panel">
                  <row className="row">
                    <div className="col-lg col-md col-sm">
                      <h2 className="panel-heading text-center">About Me</h2>
                      <hr />
                    </div>
                  </row>
                  <row className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                      <img className="media img-responsive img-rounded" id="myPic" src={require("../images/portrait/MB-1-square.jpg")} alt="Matthew Bell" height={350} width={350} />
                    </div> 
                    {/* <div class="col-md-1">&nbsp;</div> */}
                    <div className="col-lg-7 col-md-7 col-sm-7">
                      <row className="row">
                        <div className="col-lg col-md col-sm">
                          <p className="text-left mainText">
                            I am a College Student attending UCSD Extension Coding Bootcamp with a Bachelor’s Degree
                            focused in Bachelors of Science , Media Arts (3D Animation) from Platt College-San Diego. I am
                            currently seeking part time employment while attending college.
                            <br /><br />I have professional experience as a Quality Assurance Specialist as well as a VFX Compositor
                            with a demonstrated history of working in both the computer games industry and the film industry.
                            My bag of skills includes, but is not limited to; 3D Charater Animation, VFX Compositing, Databases,
                            Data Collection, and both Quality Control/Assurance.
                            Top among my goals is to work in a team environment, where collaboration allows for the creation of
                            solutions to new and difficult problems, and where the combined value of the product is increased
                            beyond the sum of its parts.
                          </p>
                        </div>
                      </row>
                      <row className="row">
                        {/* <div class="col-md-1">&nbsp;</div> */}
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <a href="https://github.com/Mbell42" target={"blank"}>
                            <p className="text-center linkText">
                              GitHub Profile
                            </p>
                          </a>
                        </div>
                        {/* <div class="col-md-1">&nbsp;</div> */}
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <a href="https://www.linkedin.com/in/matthew-bell-developer-artist/" target={"blank"}>
                            <p className="text-center linkText">
                              LinkedIn Profile
                            </p>
                          </a>
                        </div>
                        {/* <div class="col-md-1">&nbsp;</div> */}
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <a href="https://vimeo.com/matthewgbell" target={'blank'}>
                            <p className="text-center linkText">
                              Vimeo Reel
                            </p>
                          </a>
                        </div>
                        {/* <div class="col-md-1">&nbsp;</div> */}
                      </row>
                    </div>
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
        {/* FOOTER SECTION*/}
        {/* This footer is identical for each page. */}
        <footer className="py-5 footer">
          <div className="container conFoot">
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

export default About;