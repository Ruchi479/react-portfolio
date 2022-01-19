import React from "react";
const styles = {
    icon: {
        width: 80,
        height: 80,
        margin: 50,
        cursor: "pointer",
    },
};
export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <div>
                    <a href="https://github.com/Ruchi479" target="_blank">
                        <img style={styles.icon} src={require("./assets/github.png")} alt="github" className="icon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/ruchi-saini-007/" target="_blank">
                        <img style={styles.icon} src={require("./assets/linkedin.png")} alt="linkedin" className="icon"></img>
                    </a>
                </div>
            </div>
        </footer>
    );
}