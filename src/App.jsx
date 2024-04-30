import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Poster } from "./components/Poster";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { SkillCard } from "./components/SkillCard";
import { SkillFilterButton } from "./components/SkillFilterButton";
import { posterData } from "./posterData";
import { skillsData } from "./skillData";
import { cardData } from "./cardData";
import "./App.css";

const PosterElements = posterData.map((poster, index) => (
  <Poster key={index} name={poster.name} text={poster.text} />
));

const CardElements = cardData.map((card, index) => (
  <Card
    key={index}
    src={card.src}
    alt={card.alt}
    name={card.name}
    text={card.text}
  />
));
function App() {
  const [showSkills, setShowSkills] = useState(true);
  const [filteredSkills, setFilteredSkills] = useState(skillsData);

  const handleShowSkillsClick = () => {
    setShowSkills(!showSkills);
  };

  const handleFilterSkillsClick = (filter) => {
    if (filter === "moreThan50") {
      setFilteredSkills(skillsData.filter((skill) => skill.level > 50));
    } else if (filter === "lessThan50") {
      setFilteredSkills(skillsData.filter((skill) => skill.level <= 50));
    } else {
      setFilteredSkills(skillsData);
    }
  };
  return (
    <>
      <Header />

      <h2 className="bossText">Компетенции, с которыми я знаком</h2>
      {PosterElements}
      <h2 className="bossText"> Компетенции, которые я хочу узнать</h2>
      {CardElements}
      <div className="app">
        <h1>Мои навыки</h1>
        <div className="filter-buttons">
          <SkillFilterButton
            filter="all"
            onClick={() => handleFilterSkillsClick("all")}
            label="Все"
          />
          <SkillFilterButton
            filter="moreThan50"
            onClick={() => handleFilterSkillsClick("moreThan50")}
            label="Больше 50%"
          />
          <SkillFilterButton
            filter="lessThan50"
            onClick={() => handleFilterSkillsClick("lessThan50")}
            label="Меньше 50%"
          />
        </div>
        {showSkills && (
          <div className="skills-list">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        )}
        <div className="filter-buttons">
          <button onClick={handleShowSkillsClick}>
            {showSkills ? "Скрыть навыки" : "Показать навыки"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
