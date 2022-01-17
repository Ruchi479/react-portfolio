import React from 'react';
import '../styles/Footer.css';


const styles ={
    footerPage: {
        background: '#c1c1c1',
        padding: '30px 0 15px 0',
        position: 'relative',
        display:'block',
    },

    footerNote: {
        background: '#262f38',
        cursor: 'pointer',
        height: '55px',
        margin: '0 15px',
        overflow:'hidden',
        position: 'relative',
        textAlign: 'center',
        width:'55px',
        transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s',
    },
}

export default function Footer() {   
    return (
    // <div className="page-footer" id="footer">
    //     <a href="https://github.com/Ruchi479"><img src="https://img.icons8.com/ios/80/000000/github.png" alt="github-logo" class="icon"/></a>
    //     <a href="https://www.linkedin.com/in/ruchi-saini-007/"><img src="https://img.icons8.com/fluent/80/000000/linkedin-circled.png" alt="linkedin-logo" class="icon"/></a>
    // </div>

    // <a href ="#homeP"><i class="fas fa-angle-double-up arrow pagelink"></i></a>


        <div className="footerPage" style={styles.footerPage}>
            <div className='icon-wrap flex row'>
                <a href="https://www.linkedin.com/in/ruchi-saini-007/" target="_blank">
                    <img src={require("./assets/linkedin.png")} alt="github" className="footerNote flex icon" style={styles.footerNote}/>
                </a>
                
                <a href="https://github.com/Ruchi479" target="_blank">
                    <img src={require("./assets/github.png")} alt="github" className="footerNote flex icon" style={styles.footerNote}/>
                </a>
            </div>
        </div>
    );
}