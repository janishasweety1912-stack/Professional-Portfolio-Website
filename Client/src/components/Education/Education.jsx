import "./Education.css";

import SectionTitle from "../Common/SectionTitle/SectionTitle";
import Timeline from "../Common/Timeline/Timeline";
import { portfolioData } from "../../constants/portfolioData";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <SectionTitle
          subtitle="My Education"
          title="Educational Journey"
        />

        <Timeline items={portfolioData.education} />
      </div>
    </section>
  );
}

export default Education;