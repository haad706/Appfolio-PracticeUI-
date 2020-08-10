import React, { Component } from "react";
class FirstSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="first-section">
          <div className="header-content">
            <h1>Concepting & Strategies</h1>
            <p className="text-center">
              Fusce placerat pretium mauris, vel sollicitudin elit lacinia
              vitae. Quisque sit amet nisi erat.
            </p>
          </div>
          <div className="content">
            <ul>
              <li>
                <div className="first-section-list-item-bg"></div>
                <div className="b">
                  <i className="fa fa-rocket"></i>
                  <h3>Branding</h3>
                  <p>
                    Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                    mattis.
                  </p>
                </div>
              </li>
              <li>
                <div className="first-section-list-item-bg"></div>
                <div className="b">
                  <i className="fa fa-cube"></i>
                  <h3>User Experience</h3>
                  <p>
                    Proin arcu ligula lipsum, malesuada id tincidunt laoreet,
                    facilisis at justo.
                  </p>
                </div>
              </li>
              <li>
                <div className="first-section-list-item-bg"></div>
                <div className="b">
                  <i className="fa fa-object-group"></i>
                  <h3>User Interface</h3>
                  <p>
                    Donec pellentesque turpis utium lorem imperdiet semper
                    viverra.
                  </p>
                </div>
              </li>
              <li>
                <div className="first-section-list-item-bg">
                  <div className="b">
                    <i className="fa fa-code"></i>
                    <h3>Development</h3>
                    <p>
                      Facilisis arcu ligula, malesuada id tincidunt laoreet,
                      facilisis at justo.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FirstSection;
