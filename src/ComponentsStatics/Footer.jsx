import React from "react";
import "../CSS/CssPages/Footer.css";
import Instagram from "../Images/ImgFooter/instagram.png";
import Facebook from "../Images/ImgFooter/facebook.png";
import WhatsApp from "../Images/ImgFooter/whatsapp-green.png";
import Ubicacion from "../Images/ImgFooter/location.png";
import Email from "../Images/ImgFooter/gmail.png";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h4>Redes Sociales</h4>
            <ul className="list-unstyled">
              <li>
                <img className="icons-general" src={Instagram}></img>
                <b className="icons-general-text">Instagram</b>
              </li>
              <li>
                <img className="icons-general" src={Facebook}></img>
                <b className="icons-general-text">Facebook</b>
              </li>
              <li></li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>Ubicación</h4>
            <ul className="list-unstyled">
              <li>
                <img className="icons-general" src={Ubicacion}></img>
                <b className="icons-general-text">San José, CR</b>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <h4>Contacto</h4>
            <ul className="list-unstyled">
              <li>
                <img className="icons-general" src={WhatsApp}></img>
                <b className="icons-general-text">8726-1983</b>
              </li>
              <li>
                <img className="icons-general" src={Email}></img>
                <b className="icons-general-text">studiosyoku@gmail.com</b>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <p className="col-sm">
            &copy; Developed by YokuStudios CR | All right reserved | Terms of
            Services | Privacy
          </p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Footer;
