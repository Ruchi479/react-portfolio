import React from "react";
import '../styles/Project.css';


export default function PortfolioCard(props) {
    return (
        <div >
            <h1 className="headings">Projects</h1>
            <div className="img-container">

                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Project:</strong> {props.project}
                    </li>
                    <li>
                        <strong>Demo:</strong> {props.location}
                    </li>

                </ul>
            </div>

        </div>
    );
}