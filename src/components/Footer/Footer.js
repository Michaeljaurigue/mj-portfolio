import React from "react";
import { Button } from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <div className="footer-link-wrapper">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Contact me for more information
          </p>
          <p className="footer-subscription-text">
            I will get back to you as soon as possible
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <Button buttonStyle="btn--outline">Submit</Button>
            </form>
          </div>
        </section>
      </div> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link className="footer-link-item" to="/about">
              About
            </Link>
            <Link className="footer-link-item" to="/projects">
              Projects
            </Link>
            <Link className="footer-link-item" to="/artwork">
              Artwork
            </Link>
            <Link className="footer-link-item" to="/resume">
              Resume
            </Link>
            <Link className="footer-link-item" to="/">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <Button path={"/contact"} buttonStyle="btn--outline">
        Contact Me
      </Button>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              MJ
            </Link>
          </div>
          <small class="website-rights">Michael Jaurigue © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/michael.jaurigue/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/michaeljaurigue/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://twitter.com/thatdudemj/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://www.linkedin.com/in/mjaurigue/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
