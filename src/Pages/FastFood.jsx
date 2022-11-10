import React from "react";
import "../CSS/CssPages/Fastfood.css";
import Fastfood from "../JSON/Fastfood.json";

function FastFood() {
  return (
    <div className="container">
    <div className="div-general-pages">
      { Fastfood && Fastfood.map(fastfood => {
        return (
          <div className="card fastfood-card bg-primary" key={fastfood.id}>
            <img src={fastfood.picture} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{fastfood.company}</h5>
              <p className="card-text">
                {fastfood.about}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{fastfood.phone} / {fastfood.phone2}</li>
              <li className="list-group-item">{fastfood.email}</li>
              <li className="list-group-item">{fastfood.ubication}</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default FastFood;
