import React from "react";
import "./footer.css";
import logo from "./img/logo-footer.png";
import Marquee from "react-fast-marquee";
import fb from "./img/fb.png";
import ig from "./img/ig.png";
import gh from "./img/gh.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="smaller-container">
          <div className="community">
            <h3 id="com">JOIN OUR COMMUNITY</h3>
            <section className="links">
              <a href="#">
                <img src={fb}></img>
              </a>
              <a href="#">
                <img src={ig}></img>
              </a>
              <a href="#">
                <img src={gh}></img>
              </a>
            </section>
          </div>
          <div className="pages-links">
            <a href="#">About</a>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <img className="logo" src={logo}></img>
      </div>
      <div className="copyright">© 2023 JACK LEMKUS - ALL RIGHTS RESERVED</div>
    </div>
  );
}

export default Footer;
