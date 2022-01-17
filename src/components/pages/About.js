import React from 'react';
import myimg from "../assets/img1.jpg";
import '../../styles/Aboutme.css';

const styles ={
  aboutStyle: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '20px',
    marginBottom: '50px',
  },
}

export default function About() {
  return (
    <section className="container" style={styles.aboutStyle}><br/><br/>
        <h1 className="headings">About Me</h1>
        <div className="pic">
            <img src={myimg} alt="unavailable"/>
            <div className="intro">
                <h2>Ruchi</h2>
                <p> 
                  Hello, I'm Ruchi! I switched my gears from my education in Teaching to take on Web Development to keep challenging myself in ways I thought I never could. 
                  Web Development allows me to continually create and creatively find new ways to make processes better. I always believed that anything can be improved and 
                  there are different ways to solve problems. Web Development has never been "just a job" for me, it is offered an engaging challenge to continually learn,
                  teach, and improve my skills in creating good quality web sites.With that being said, I am Full Stack Web Developer based in India with a Master’s Degree combined with 
                  Graduate Coding BootCamp from Monash University in Melbourne, Australia and 4+ years professional Computer Science Teaching experience in India. I am a naturally curious person which makes me want to always learn new things. I am a problem-solver who 
                  questions everything. I am a hard worker who doesn't take life too seriously and enjoys the little things. You will always find a smile on my face.                
                </p>
            </div>
        </div>
    </section>
  );
}
