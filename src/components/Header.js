import React from "react";
import img2 from "./assets/img2.jpg";

const styles ={
    aboutStyle: {
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      padding: '20px',
      marginBottom: '50px',
    },
  }

  export default function Header() {
  return (
    <section id="home" className="container" style={styles.aboutStyle}>
        <div class="main">
            <img src={img2} alt="unavailable"/>
            <h1 class="text1">Hi, My name is</h1>
            <div class="text2">Ruchi</div>
            <div class="text3">I am a <span>Web Developer</span></div>
        </div>
    </section>
  )
}

