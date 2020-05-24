import React, { Component } from 'react';
import "./style.css";

class Gallery extends Component {
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
                      <h2 className="panel-heading text-center">Portfolio</h2>
                      <hr />
                    </div>
                  </row>
                  {/* Begin first row */}
                  <row className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="card h-100 cardLeft">
                        <a href="https://github.com/Mbell42/07_project-01"><img className="media img-rounded img-responsive card-img-top" src="../images/currency-app-square.png" alt="CurrencyExchangePro" /></a>
                        <div className="card-body">
                          <a href="https://github.com/Mbell42/07_project-01" target={"blank"}>
                            <p className="card-title text-center linkText">CurrencyExchangePro</p>
                          </a>
                          <p className="card-text mainText">
                            This is my first group project for class.  We built a currency-app together that can convert any currency into another currency, store/display your search history, and send a text message of the most recent search details.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="card h-100 cardMid">
                        <a href="https://github.com/Mbell42/06_weather-dashboard"><img className="media img-rounded img-responsive card-img-top" src="../images/weather-dashboard-square.png" alt="weather-dashboard" /></a>
                        <div className="card-body">
                          <a href="https://github.com/Mbell42/06_weather-dashboard" target={"blank"}>
                            <p className="card-title text-center linkText">Weather Dashboard</p>
                          </a>
                          <p className="card-text mainText">
                            This is my sixth homework project.  I made a weather dashboard that will display current and forecast weather data using API requests.  The current weather data is displayed in the top right, and the forecast data for five days is shown below.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="card h-100 cardRight">
                        <a href="https://github.com/Mbell42/05_work-day-scheduler"><img className="media img-rounded img-responsive card-img-top" src="../images/day-scheduler-square.png" alt="work-day-scheduler" /></a>
                        <div className="card-body">
                          <a href="https://github.com/Mbell42/05_work-day-scheduler" target={"blank"}>
                            <p className="card-title text-center linkText">Work Day Scheduler</p>
                          </a>
                          <p className="card-text mainText">
                            This is my fifth homework project. I Created a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End first row */}
                  </row>
                  {/* Begin second row */}
                  <row className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="card h-100 cardRight">
                        <a href="https://github.com/Mbell42/project2"><img className="media img-rounded img-responsive card-img-top" src="../images/project2_minute-page-square.jpg" alt="Project 2 - Minute Page" /></a>
                        <div className="card-body">
                          <a href="https://github.com/Mbell42/project2" target={"blank"}>
                            <p className="card-title text-center linkText">Project 2 - Minute Page</p>
                          </a>
                          <p className="card-text mainText">
                            This is the second group project for my class. We created a landing page generator using NodeJs, Express, and MySQL.  Users can login, and quickly create landing pages that are bound to their user account.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="card h-100 cardRight">
                        <a href="https://github.com/Mbell42/generator-pw-random"><img className="media img-rounded img-responsive card-img-top" src="../images/randomPwGen-square.png" alt="Random Password Generator" /></a>
                        <div className="card-body">
                          <a href="https://github.com/Mbell42/generator-pw-random" target={"blank"}>
                            <p className="card-title text-center linkText">Random Password Generator</p>
                          </a>
                          <p className="card-text mainText">
                            This is my third homework project. I Created a simple random password generator that allows the user to save the created password to their clipboard.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="card h-100 cardRight">
                        <a href="https://github.com/Mbell42/10_TemplateEngine-EmployeeSummary"><img className="media img-rounded img-responsive card-img-top" src="../images/employee-summary-square.png" alt="TemplateEngine-EmployeeSummary" /></a>
                        <div className="card-body">
                          <a href="https://github.com/Mbell42/10_TemplateEngine-EmployeeSummary" target={"blank"}>
                            <p className="card-title text-center linkText">TemplateEngine-EmployeeSummary</p>
                          </a>
                          <p className="card-text mainText">
                            This is my tenth homework project.  I Created a a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.
                          </p>
                        </div>
                      </div>
                    </div>
                  </row>
                  {/* End second row */}
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

export default Gallery;