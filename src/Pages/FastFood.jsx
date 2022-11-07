import React from "react";
import "../CSS/CssPages/Fastfood.css";
import Fastfood from "../JSON/Fastfood.json";

function FastFood() {
  return (
    <div className="div-general-pages container">
      {Fastfood.map((fastfood) => {
        return (
          <div class="card fastfood-card" key={fastfood.id}>
            <img src="..." class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{fastfood.company}</h5>
              <p class="card-text">
                {fastfood.about}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FastFood;
