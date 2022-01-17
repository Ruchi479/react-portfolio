import React from "react";
import PortfolioCard from "../PortfolioCard";
import projects from "../../projects.json";
import '../../styles/Project.css';

const styles ={
  workStyle: {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
  padding: '30px',
  },
}

export default function Portfolio() {
  return (
    <div className="work" style={styles.workStyle}>
      <h1 className="headings">Projects</h1>
      {/* <div className="container portfolio-container"> */}
      <div className="linkedin">
        <div className="project">
          <PortfolioCard
            name={projects[0].name}
            image={projects[0].image}
            topics={projects[0].topics}
            deploy={projects[0].deploy}
            github={projects[0].github}
          />
          <PortfolioCard
            name={projects[1].name}
            image={projects[1].image}
            topics={projects[1].topics}
            deploy={projects[1].deploy}
            github={projects[1].github}
          />
        </div>
      </div>
      <div className="gallery">
        <div className="project">
          <PortfolioCard
            name={projects[2].name}
            image={projects[2].image}
            topics={projects[2].topics}
            deploy={projects[2].deploy}
            github={projects[2].github}
          />

          <PortfolioCard
            name={projects[3].name}
            image={projects[3].image}
            topics={projects[3].topics}
            deploy={projects[3].deploy}
            github={projects[3].github}
          />
        </div>
      </div>
      <div className="gallery">

        <div className="project">

          <PortfolioCard
            name={projects[4].name}
            image={projects[4].image}
            topics={projects[4].topics}
            deploy={projects[4].deploy}
            github={projects[4].github}
          />

          <PortfolioCard
            name={projects[5].name}
            image={projects[5].image}
            topics={projects[5].topics}
            deploy={projects[5].deploy}
            github={projects[5].github}
          />

        </div>
      </div>
    </div >
  );
}


