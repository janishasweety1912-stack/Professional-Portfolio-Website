import "./Skills.css";

import SectionTitle from "../Common/SectionTitle/SectionTitle";
import SkillBar from "../Common/SkillBar/SkillBar";
import { portfolioData } from "../../constants/portfolioData";

function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills">
      <div className="container">
        <SectionTitle
          subtitle="Technical Expertise"
          title="My Skills"
        />

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Frontend</h3>
            {skills.frontend.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            {skills.backend.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>

          <div className="skill-category">
            <h3>Database</h3>
            {skills.database.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>

          <div className="skill-category">
            <h3>Tools</h3>

            <div className="tools-list">
              {skills.tools.map((tool, index) => (
                <span key={index} className="tool-badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;