import React from "react";
import '../styles/Project.css';

const styles ={
    largepicStyle: {
    padding: '12px',
    width:'570px',
    /* max-width: 100%; */
    height:'400px',
    margin: '15px',
    },
  }

export default function PortfolioCard(props) {
    return (
        <div>
            <div className="img-container">

                <img alt={props.name} src={props.image} className="largepic" style={styles.largepicStyle}/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong><b>Name:</b></strong> {props.name}
                    </li>
                    <li>
                        <strong><b>Topics:</b></strong> {props.topics}
                    </li>
                    <li>
                        <a href={props.deploy} target="_blank"><strong>See the Deploy Site</strong></a>
                    </li>
                    <li>
                        <a href={props.github} target="_blank"><strong>See the Code</strong></a>
                    </li>

                </ul>
            </div>

        </div>
    );
}