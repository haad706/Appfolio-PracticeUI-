import React, { Component } from "react";
class NavBar extends Component {
  state = {
    c: 0,
    h: null
  };
  kholo = e => {
    const height = window.innerHeight;
    console.log(height);
    const navLinks = document.querySelectorAll(".nav-links li");
    const l1 = document.querySelector(".burger .line1");
    const l2 = document.querySelector(".burger .line2");
    const l3 = document.querySelector(".burger .line3");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = ` navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    if (this.state.c === 0) {
      this.setState({
        c: 1
      });
      console.log("kholdia");
      document.getElementsByClassName("nav-links")[0].style.width = "90% !important";
      l1.style.transform = "rotate(-45deg) translate(-3px, 3px)";
      l2.style.opacity = "0";
      l3.style.transform = "rotate(45deg) translate(-4px, -4px)";
      // document.getElementsByClassName("nav-links")[0].style.transform =
      //   "translateX(0%)";
      document.getElementsByClassName('nav-links')[0].style.height= "auto";


    } 
    else {
      this.setState({
        c: 0
      });
      console.log("band krdia");
      l1.style.transform = "none";
      l2.style.opacity = "1";
      l3.style.transform = "none";
      document.getElementsByClassName('nav-links')[0].style.height= "0px";
    }
  };
  render() {
    return (
      <header class="header">
        <div className="wrapper">
          <div className="logo-container">
            <img src={require("./images/green-logo.svg")} alt="" />
            <div className="burger" onClick={()=>this.kholo()}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <nav className="navbar-list">
            <ul className="nav-links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Our Work</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="" className="contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
