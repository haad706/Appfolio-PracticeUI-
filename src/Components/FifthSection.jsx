import React, { Component } from "react";
class FifthSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="fifth-section">
          <div className="header-content">
            <h1>Latest Blog Posts</h1>
            <p className="text-center">
              Fusce placerat pretium mauris, vel sollicitudin elit lacinia
              vitae. Quisque sit amet nisi erat.
            </p>
          </div>
          <div className="content">
              <ul>
                  <li>
                      <div className="image-container">
                          <img src={require('./images/1.jpg')} alt=""/>
                      </div>
                      <div className="content-container">
                          <h4>5 Steps to becoming GDPR compliant on mobile apps</h4>
                          <p>Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae purus tempus dignissim ipsum primis in faucibus.</p>
                          <button className="btn btn-read-more">
                              Read More
                          </button>
                      </div>
                  </li>
                  <li>
                      <div className="image-container">
                          <img src={require('./images/2.jpg')} alt=""/>
                      </div>
                      <div className="content-container">
                          <h4>Measuring app success through mobile analytics</h4>
                          <p>Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                          <button className="btn btn-read-more">
                              Read More
                          </button>
                      </div>
                  </li>
                  <li>
                      <div className="image-container">
                          <img src={require('./images/3.jpg')} alt=""/>
                      </div>
                      <div className="content-container">
                          <h4>How accessibility will influence your app develop</h4>
                          <p>Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem auctor malesuada. Morbi auctor tortor eu risus condimentum.</p>
                          <button className="btn btn-read-more">
                              Read More
                          </button>
                      </div>
                  </li>
              </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FifthSection;
