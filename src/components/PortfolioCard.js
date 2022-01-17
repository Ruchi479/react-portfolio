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
        <div >
            <div className="img-container">

                <img alt={props.name} src={props.image} className="largepic" style={styles.largepicStyle}/>
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Topics:</strong> {props.topics}
                    </li>
                    <li>
                        <strong>Deploy Site:</strong> {props.deploy}
                    </li>
                    <li>
                        <strong>GitHub:</strong> {props.github}
                    </li>

                </ul>
            </div>

        </div>
    );
}