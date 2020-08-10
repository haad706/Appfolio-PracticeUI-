import React, { Component } from "react";
class ThirdSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="third-section">
          <div className="header-content">
            <h1>Our Team</h1>
            <p className="text-center">
              Fusce placerat pretium mauris, vel sollicitudin elit lacinia
              vitae. Quisque sit amet nisi erat.
            </p>
          </div>
          <ul>
            <li>
              <div className="third-section-list-item-bg"></div>
              <div className="content">
                
                <div className="content-header">
                <img src={require("./images/t1.jpg")} alt="" />
                  <h5>Fletch Skinner</h5>
                  <p>Product Strategist</p>
                </div>
                <div className="icon-list">
                    <i className="fa fa-facebook icon"/>
                    <i className="fa fa-twitter icon"/>
                    <i className="fa fa-linkedin icon"/>
                    <i className="fa fa-github icon"/>

                </div>
                <p>
                  Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                  at justo. Sed at lorem.
                </p>
              </div>
            </li>
            <li>
              <div className="third-section-list-item-bg"></div>
              <div className="content">
                
                <div className="content-header">
                <img src={require("./images/t2.jpg")} alt="" />
                  <h5>Lance Bogrol</h5>
                  <p>Visual Designer</p>
                </div>
                <div className="icon-list">
                    <i className="fa fa-facebook icon"/>
                    <i className="fa fa-twitter icon"/>
                    <i className="fa fa-linkedin icon"/>
                    <i className="fa fa-github icon"/>

                </div>
                <p>
                  Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                  at justo. Sed at lorem.
                </p>
              </div>
            </li>
            <li>
              <div className="third-section-list-item-bg"></div>
              <div className="content">
                
                <div className="content-header">
                <img src={require("./images/t3.jpg")} alt="" />
                  <h5>Valentino Morose</h5>
                  <p>Android Developer</p>
                </div>
                <div className="icon-list">
                    <i className="fa fa-facebook icon"/>
                    <i className="fa fa-twitter icon"/>
                    <i className="fa fa-linkedin icon"/>
                    <i className="fa fa-github icon"/>

                </div>
                <p>
                  Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                  at justo. Sed at lorem.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ThirdSection;
