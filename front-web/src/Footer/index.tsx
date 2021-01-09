import "./style.css";
import {ReactComponent as Instagram } from "./instagram.svg";
import {ReactComponent as Linkedin } from "./linkedin.svg";
import {ReactComponent as Youtube } from "./youtube.svg";

function Footer(){
    return(
        <footer className="main-footer">
            <p>App desenvolvido durante a 2ª ed. do evento <strong>Semana DevSuperior</strong></p>
            <div className="footer-icons">
                <a href="/" target="_new"><Youtube/></a>
                <a href="/" target="_new"><Linkedin/></a>
                <a href="/" target="_new"><Instagram/></a>
            </div>
        </footer>
    )
}

export default Footer;