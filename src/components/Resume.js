import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <div className="resume">
      <h1 className="page-title">Resume</h1>
      <div className="resume-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="resume-entry">
          <img src={require("/Users/mariogegprifti/Desktop/portfolio/portfolio-website/src/Baruch_College_stacked.svg.png")} alt="Laguardia College Logo" className="school-logo" />
          <div className="school-info">
            <h3>Baruch College</h3>
            <p>Computer Science | Expected Graduation: Summer 2026</p>
            <p>Concentration: Financial Maths</p>
          </div>
        </div>

        <div className="resume-entry">
          <img src={require("/Users/mariogegprifti/Desktop/portfolio/portfolio-website/src/lagcc_logo_off.jpg")} alt="Laguardia College Logo" className="school-logo" />
          <div className="school-info">
            <h3>LaGuardia Community College</h3>
            <p>Computer Science | March 2023 - June 2024</p>
            <p>Dean's List | 2023-2024</p>
            <p>GPA: 3.83</p>
          </div>
        </div>
        {/* Add more education entries as needed */}
      </div>

      <div className="resume-section experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="resume-entry">
          <img src={require("/Users/mariogegprifti/Desktop/portfolio/portfolio-website/src/inspecthoa_rexera.png")} alt="Rexera Logo" className="school-logo" />
          <div className="school-info">
            <h3>Rexera</h3>
            <p>Software Engineer II | January 2023 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
