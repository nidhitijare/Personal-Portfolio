import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="intro">HELLO, I'M</p>
        <h1>
          Nidhi <span>Tijare</span>
        </h1>
        <h4>
          Motivated and detail-oriented BCA student aiming <br/>to start a career in software development and 
          <br/>continuously improve technical skills.<br/>
          Eager to build elegant solutions and grow as a developer.
        </h4>
        <br/>

        <div className="buttons">
          <button className="btn pink">Get in Touch</button>
          <a href="/resume.pdf" target="_blank">
          <button className="btn">View Resume</button>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="circle">👩‍💻</div>
      </div>
    </section>
  );
}

export default Hero;