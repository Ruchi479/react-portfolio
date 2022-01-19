import React from "react";
import img2 from "./assets/cover-image.jpg";

const styles ={
    homeStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        borderBottom: '4px solid #3bb99b',
        // backgroundColor: '#5f5630',
        // background: '{img2} no-repeat center',
    },
    mainStyle:{
        fontSize: '75px',
        fontWeight: '600',
        top:'10%',
    },
    text1Style:{
        color: 'white',
        textShadow: '2px 2px 5px green',
    },
    

  }

  export default function Header() {
  return (
    
        <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")', backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
            {/* style={{backgroundImage: `url(${background})` */}
            <div className="home" id="container" style={styles.homeStyle}>
                <div className="main" style={styles.mainStyle}>
                    
                    {/* <img src={img2} alt="unavailable"/>  */}
                        <h1 className="text1" style={styles.text1Style} >Hi, My name is Ruchi</h1>
                    
                        <h2 className="text1" style={styles.text1Style}>I am a Full Stack Web Developer</h2>
                </div>
            </div>
        </div>
  )
}

