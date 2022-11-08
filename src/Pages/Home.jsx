import React from "react";
import "../CSS/CssPages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="div-general-pages-home">
      <div className="container home-div-tittle">
        <h1 className="home-h1-title">Web para todos Alajuelita</h1>
      </div>
      <div className="container home-div-buttons">
        <div className="">
          <Link to="/fastfood">
            <button
              type="button"
              className="btn btn-lg btn-outline-success home-buttons-all"
            >
              Comida Rápida
            </button>
          </Link>
          <Link to="/barber">
            <button
              type="button"
              className="btn btn-lg btn-outline-light home-buttons-all"
            >
              Barberías
            </button>
          </Link>
        </div>
        <div className="">
          <Link to="/clothes">
            <button
              type="button"
              className="btn btn-lg btn-outline-info home-buttons-all"
            >
              Ropa y Calzado
            </button>
          </Link>
          <Link to="/furniture">
            <button
              type="button"
              className="btn btn-lg btn-outline-secondary home-buttons-all"
            >
              Mueblerías
            </button>
          </Link>
        </div>
        <div className="">
          <Link to="/beauty">
            <button
              type="button"
              className="btn btn-lg btn-outline-warning home-buttons-all"
            >
              Cuidado Personal
            </button>
          </Link>
          <Link to="/pets">
            <button
              type="button"
              className="btn btn-lg btn-outline-success home-buttons-all"
            >
              Veterinarias
            </button>
          </Link>
        </div>
        <div className="">
          <Link to="/sport">
            <button
              type="button"
              className="btn btn-lg btn-outline-danger home-buttons-all"
            >
              Deporte
            </button>
          </Link>
          <Link to="/services">
            <button
              type="button"
              className="btn btn-lg btn-outline-light home-buttons-all"
            >
              Servicios
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
