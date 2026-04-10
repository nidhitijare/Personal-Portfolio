import React from "react";

const Footer = () => {
  return (
    <footer id="contact" style={{ padding: "60px", borderTop: "1px solid #ccc", textAlign: "center" }}>
      
      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Let's <span style={{ color: "#ff4d88" }}>Connect</span>
      </h2>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <a
        href="mailto:nidhi.tijare@gmail.com"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          backgroundColor: "#ff4d88",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          marginTop: "10px"
        }}
      >
        Say Hello 👋
      </a>

      <p style={{ marginTop: "40px", fontSize: "12px", color: "#777" }}>
        © {new Date().getFullYear()} Nidhi Tijare. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;