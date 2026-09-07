import "./SkillBar.css";

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-header">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillBar;