import React, { Component } from "react";
class SeccondSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="second-section">
          <ul>
            <li>
              <div className="main-container">
                <div className="count">
                  1<div className="bg"></div>
                </div>
                <div className="content">
                  <h5>
                    Enterprise-grade development secures reliability and quality
                  </h5>
                  <p>
                    Praesent tortor nulla, ullamcorper vel ante at, varius
                    tincidunt augue. Cras vitae consectetur arcu. Proin at velit
                    vel risus elementum accumsan sed non neque. Aenean risus
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="main-container">
                <div className="count">
                  2<div className="bg"></div>
                </div>

                <div className="content">
                  <h5>
                    Design and UX that ensures your app will be loved and used
                  </h5>
                  <p>
                    Quisque nec consectetur arcu. Duis tellus ante, sodales sed
                    molestie at, sagittis id neque. Quisque condimentum libero
                    arcu. Mauris tellus sem, ultrices varius nisl at.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="main-container">
                <div className="count">
                  3<div className="bg"></div>
                </div>
                <div className="content">
                  <h5>A proven and tested process guarantees your success</h5>
                  <p>
                    Aliquam bibendum velit ut ante cursus, et efficitur lectus
                    rutrum. Maecenas ac convallis lorem, non ultricies sem. Duis
                    elit metus, ullamcorper sed ante sed, viverra bibendum
                    neque.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="main-container">
                <div className="count">
                  4<div className="bg"></div>
                </div>
                <div className="content">
                  <h5>Start-to-end app development agency</h5>
                  <p>
                    Cras imperdiet faucibus sem, a dignissim urna feugiat sed.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Pellentesque posuere vestibulum lorem. neque.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="image-container">
            <img src={require("./images/home-mockup.png")} alt="" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default SeccondSection;
