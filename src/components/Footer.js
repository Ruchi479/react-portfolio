import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../styles/Aboutme.css';

const styles ={
    footerPage: {
        background: '#c1c1c1',
        padding: '70px 0 50px 0',
        position: 'relative',
    },
}

function Footer() {   
    return (
    // <div className="page-footer" id="footer">
    //     <a href="https://github.com/Ruchi479"><img src="https://img.icons8.com/ios/80/000000/github.png" alt="github-logo" class="icon"/></a>
    //     <a href="https://www.linkedin.com/in/ruchi-saini-007/"><img src="https://img.icons8.com/fluent/80/000000/linkedin-circled.png" alt="linkedin-logo" class="icon"/></a>
    // </div>

    // <a href ="#homeP"><i class="fas fa-angle-double-up arrow pagelink"></i></a>


    <div className="icon-wrap flex row footer" style={styles.footerPage}>
        <a href="https://www.linkedin.com/in/ruchi-saini-007/" target="_blank">
            <div className="flex icon" id="icon-2">
                <FontAwesomeIcon icon={faLinkedin}/>
            </div>
        </a>
        <a href="https://github.com/Ruchi479" target="_blank">
            <div className="flex icon" id="icon-3">
                <FontAwesomeIcon icon={faGithubSquare}/>
            </div>
        </a>
    </div>
    )
}

export default Footer;