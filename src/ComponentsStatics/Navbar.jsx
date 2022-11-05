import React from "react";
import '../CSS/CssPages/Navbar.css';
import Logo from '../Images/ImgNavbar/llama3.png';
import Home from '../Images/ImgNavbar/home.png';
import FastFood from '../Images/ImgNavbar/fast-food.png';
import BarberShop from '../Images/ImgNavbar/barber-shop.png';
import Clothes from '../Images/ImgNavbar/clothing.png';
import Furniture from '../Images/ImgNavbar/furniture.png';
import HairCut from '../Images/ImgNavbar/hair-cutting.png';
import Pets from '../Images/ImgNavbar/veterinary.png';
import Sport from '../Images/ImgNavbar/balls-sports.png';
import Servicios from '../Images/ImgNavbar/services.png';
import Support from '../Images/ImgNavbar/support.png';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">
          <img className="brand-navbar-llama" src={Logo}></img>
        </Link>
        <button
          className="navbar-toggler buttom-navbar-toggler bg-info"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-auto navbar-links-general" id="navbarNav">
          <ul class="navbar-nav">
            <hr/>
            <Link className="nav-item active" to="/">
                <img src={Home} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/fastfood">
                <img src={FastFood} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/barber">
                <img src={BarberShop} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/clothes">
                <img src={Clothes} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/furniture">
                <img src={Furniture} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/beauty">
                <img src={HairCut} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/pets">
                <img src={Pets} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/sport">
                <img src={Sport} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <Link className="nav-item active" to="/services">
                <img src={Servicios} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
            <hr/>
            <Link className="nav-item active" to="/contact">
                <img src={Support} className="navbar-brand-link-global"></img>
            </Link>
            <hr/>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
