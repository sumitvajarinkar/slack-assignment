import React from "react";
import "../App.css";

const companies = [
  "FOX",
  "Lonely Planet",
  "Intuit",
  "Carvana",
  "Kiva",
  "Devac",
];

const TrustedBy = () => {
  return (
    <section className="trusted">
      <div className="logos">
        {companies.map((company, index) => (
          <span key={index} className="logo">
            <img src={company.img} alt="companylogo" />
            {company}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
