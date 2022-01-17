import React from "react";
import img2 from "./assets/img2.jpg";

const styles ={
    homeStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        backgroundColor: '#5f5630',
    //   background: 'url("../assets/img2.jpg") no-repeat center',
    },
    main:{
        fontSize: '75px',
        fontWeight: '600',
    },
    text:{
        color: 'yellow',
    },

  }

  export default function Header() {
  return (
    <div className="home" id="container" style={styles.homeStyle}>
        <div className="main" style={styles.mainStyle}>
            {/* <img src={img2} alt="unavailable"/> */}
            <h1 >Hi, My name is Ruchi</h1>
            <h2 className="text" style={styles.textStyle}>I am a Full Stack Web Developer</h2>
        </div>
    </div>
  )
}

