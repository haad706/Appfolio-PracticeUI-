import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="left-half">
            <img src={require("./images/green-logo.svg")} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              sunt numquam accusantium quis odit beatae aut nam. Tenetur,
              doloribus est labore dolores doloremque soluta sint voluptas!
              Corporis saepe blanditiis dicta.
            </p>
          </div>
          <div className="right-half">
            <ul className="footer-main-list">
              <li className="footer-main-list-item">
                <ul  className="footer-sub-list">
                  <li className="footer-list-header">Helpful Links</li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Our Work</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Services</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Contact</a>
                  </li>
                </ul>
              </li>
              <li className="footer-main-list-item">
                <ul className="footer-sub-list">
                  <li className="footer-list-header">Latest Apps</li>
                  <li className="sub-item">
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Dance School</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Coiner</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Cloud Manager</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Coding Life</a>
                  </li>
                  <li>
                    <i className="chevron-right fa fa-chevron-right" />
                    <a href="">Smart Office</a>
                  </li>
                </ul>
              </li>
              <li className="footer-main-list-item">
                <ul className="footer-sub-list">
                  <li className="footer-list-header">Contact Us</li>

                  <li>
                    <a href="">455 West Orchard Street</a>
                  </li>
                  <li>
                    <a href="">Kings Mountain, NC 28086</a>
                  </li>
                  <li>
                    <a href="">Phone: (272) 211-7370</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">E-Mail:support@yourbrand.com</a>
                  </li>
                  <li className="footer-social-media-list">
                    <ul>
                      <li>
                        <i className="fa fa-facebook footer-social-icon" />
                      </li>
                      <li>
                        <i className="fa fa-twitter footer-social-icon" />
                      </li>
                      <li>
                        <i className="fa fa-linkedin footer-social-icon" />
                      </li>
                      <li>
                        <i className="fa fa-google-plus footer-social-icon" />
                      </li>
                      <li>
                        <i className="fa fa-github footer-social-icon" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
