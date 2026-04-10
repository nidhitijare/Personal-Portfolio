import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      {/* CENTER HEADING */}
      <h2 className="about-heading">
        About <span>Me</span>
      </h2>

      <p className="about-subtitle">
        Get to know more about who I am and what I do.
      </p>

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <p>
            I am a BCA student at Sadabai Raisoni Women's College,
            Nagpur, with a growing foundation in React, Python, and SQL.
            I love building clean, efficient applications and continuously
            learning new technologies.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="card">
            <h3 className="gradient-text">5+</h3>
            <p>Projects</p>
          </div>

          <div className="card">
            <h3 className="gradient-text">2024</h3>
            <p>Started Coding</p>
          </div>

          <div className="card">
            <h3 className="gradient-text">BCA</h3>
            <p>Degree</p>
          </div>

          <div className="card">
            <h3 className="gradient-text">3</h3>
            <p>Technologies</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;