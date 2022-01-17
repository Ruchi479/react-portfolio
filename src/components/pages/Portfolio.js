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
      <div className="container portfolio-container">
        <div className="row">
          <PortfolioCard
            name={projects[0].name}
            image={projects[0].image}
            project={projects[0].project}
            location={projects[0].location}
          />
          <PortfolioCard
            name={projects[1].name}
            image={projects[1].image}
            project={projects[1].project}
            location={projects[1].location}
          />
        </div>
        <div className="row">
          <PortfolioCard
            name={projects[2].name}
            image={projects[2].image}
            project={projects[2].project}
            location={projects[2].location}
          />

          <PortfolioCard
            name={projects[3].name}
            image={projects[3].image}
            project={projects[3].project}
            location={projects[3].location}
          />
        </div>

        <div className="row">

          <PortfolioCard
            name={projects[4].name}
            image={projects[4].image}
            project={projects[4].project}
            location={projects[4].location}
          />

          <PortfolioCard
            name={projects[5].name}
            image={projects[5].image}
            project={projects[5].project}
            location={projects[5].location}
          />

        </div>
      </div>



    </div >
  );
}


