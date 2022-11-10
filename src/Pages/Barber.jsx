import React from "react";
import "../CSS/CssPages/Barber.css";
import BarberJson from "../JSON/Barber.json";

function Barber() {
  return (
    <div className="container">
      <div className="div-general-pages">
        {BarberJson &&
          BarberJson.map((barberjson) => {
            return (
              <div class="card barber-div-card bg-primary" key={barberjson.id}>
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">{barberjson.company}</h5>
                  <p class="card-text">
                    {barberjson.about}
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
    </div>
  );
}

export default Barber;
