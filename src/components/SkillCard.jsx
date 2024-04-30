export const SkillCard = ({ skill }) => {
    return (
      <div className="skill-card">
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
        <div className="skill-level">
          <span>Уровень освоения:</span>
          <span>{skill.level}%</span>
        </div>
      </div>
    );
  };