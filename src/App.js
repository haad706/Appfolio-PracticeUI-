import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import WelcomeSection from "./Components/Welcome";
import FirstSection from "./Components/FirstSection";
import FifthSection from "./Components/FifthSection";
import SecondSection from "./Components/SecondSection";
import ThridSection from "./Components/ThridSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <WelcomeSection />
      <div className="wrapper">
        <FirstSection />
        {/* <div class="aaa">
          <div className="contain">
            <div className="content">
              <button class="btn btn-apple">
                <span class="fa fa-apple icon-store" />
                <span class="content-button">
                  <p>
                    available on <br />
                  </p>
                  <h3>play store</h3>
                </span>
              </button>
              <button class="btn btn-android">
                <span class="fa fa-android icon-store" />
                <span class="content-button">
                  <p>
                    available on <br />
                  </p>
                  <h3>play store</h3>
                </span>
              </button>
            </div>
          </div>
        </div> */}

        <SecondSection />
        <ThridSection />
        <FifthSection />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
