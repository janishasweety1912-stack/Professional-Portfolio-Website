import "./Experience.css";

import SectionTitle from "../Common/SectionTitle/SectionTitle";
import Timeline from "../Common/Timeline/Timeline";
import { portfolioData } from "../../constants/portfolioData";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionTitle
          subtitle="Professional Journey"
          title="Experience"
        />

        <Timeline items={portfolioData.experience} />
      </div>
    </section>
  );
}

export default Experience;