import React from "react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sadabai Raisoni Women's College, Nagpur",
    year: "2023 – 2026",
    description:
      "Currently pursuing BCA with focus on programming, web development, and database management.",
  },
  {
    degree: "HSC Qualification",
    institution: "Prerna College",
    year: "2022 – 2023",
    description: "Completed Higher Secondary Certificate (HSC).",
  },
  {
    degree: "SSC Qualification",
    institution: "J.N Tata Parsi School",
    year: "2020 – 2021",
    description: "Completed Secondary School Certificate (SSC).",
  },
];

const Education = () => {
  return (
    <section id="education" style={{ padding: "60px" }}>
      
      {/* HEADING */}
      <h2 style={{ textAlign: "center", fontSize: "32px" }}>
        My <span style={{ color: "#ff4d88" }}>Education</span>
      </h2>

      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Academic background and qualifications.
      </p>

      {/* MAIN */}
      <div style={{ maxWidth: "700px", margin: "auto" }}>

        {/* BCA CENTER */}
        <div
          style={{
            padding: "20px",
            marginBottom: "30px",
            borderRadius: "10px",
            background: "#f2f2f2",
            textAlign: "center",
          }}
        >
          <span>{education[0].year}</span>
          <h3>{education[0].degree}</h3>
          <p>{education[0].institution}</p>
          <p>{education[0].description}</p>
        </div>

        {/* HSC LEFT + SSC RIGHT */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >

          {/* HSC (LEFT) */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              borderRadius: "10px",
              background: "#f2f2f2",
            }}
          >
            <span>{education[1].year}</span>
            <h3>{education[1].degree}</h3>
            <p>{education[1].institution}</p>
            <p>{education[1].description}</p>
          </div>

          {/* SSC (RIGHT) */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              borderRadius: "10px",
              background: "#f2f2f2",
            }}
          >
            <span>{education[2].year}</span>
            <h3>{education[2].degree}</h3>
            <p>{education[2].institution}</p>
            <p>{education[2].description}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;