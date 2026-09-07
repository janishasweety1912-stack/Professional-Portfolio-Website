import "./Timeline.css";

function Timeline({ items }) {
  return (
    <div className="timeline">

      {items.map((item) => (

        <div className="timeline-item" key={item.id}>

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <h3>{item.role || item.degree}</h3>

            <h4>{item.company || item.institution}</h4>

            <span>{item.duration}</span>

            {item.description && (
              <p>{item.description}</p>
            )}

            {item.cgpa && (
              <p><strong>CGPA:</strong> {item.cgpa}</p>
            )}

          </div>

        </div>

      ))}

    </div>
  );
}

export default Timeline;