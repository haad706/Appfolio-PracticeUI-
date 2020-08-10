import React, { Component } from "react";
class WelcomeSection extends Component {
  state = {};
  render() {
    return (
      <section className="welcome-area">
        <div className="welcome-bg">
          <div className="welcome-clip"></div>
        </div>
        <div className="welcome-content">
          <div className="first-half">
            <h1>We Build Apps That Get Trending On AppStore.</h1>
            <p>
              We design and develop mobile apps that delight your users and grow
              your business. Enterprise-grade development combined with
              outstanding design.
            </p>
            <button className="btn-welcome">ALL WORKS</button>
          </div>
          <div className="second-half">
            <ul className="welcome-content-list">
              <li className="welcome-content-list-item">
                <div className="welcome-list-item-image-container">
                  <img src={require("./images/1.png")} alt="" />
                </div>
                <div className="welcome-list-item-content">
                  <span>Mobile Mining</span>
                  <span className="list-item-icons">
                    <span className="fa fa-apple list-icon"></span>
                    <span className="fa fa-android list-icon"></span>
                    <span className="fa fa-windows list-icon"></span>
                  </span>
                </div>
              </li>
              <li className="welcome-content-list-item">
                <div className="welcome-list-item-image-container">
                  <img src={require("./images/2.png")} alt="" />
                </div>
                <div className="welcome-list-item-content">
                  <span>Bitcoin Wallet</span>
                  <span className="list-item-icons">
                    <span className="fa fa-apple list-icon"></span>
                    <span className="fa fa-android list-icon"></span>
                    <span className="fa fa-windows list-icon"></span>
                  </span>
                </div>
              </li>
              <li className="welcome-content-list-item">
                <div className="welcome-list-item-image-container">
                  <img src={require("./images/3.png")} alt="" />
                </div>
                <div className="welcome-list-item-content">
                  <span>Website Stats</span>
                  <span className="list-item-icons">
                    <span className="fa fa-apple list-icon"></span>
                    <span className="fa fa-android list-icon"></span>
                    <span className="fa fa-windows list-icon"></span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default WelcomeSection;
