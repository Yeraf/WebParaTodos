import React from "react";
import Navbar from "./ComponentsStatics/Navbar";
import Home from "./Pages/Home";
import Barber from "./Pages/Barber";
import Beauty from "./Pages/Beauty";
import Clothes from "./Pages/Clothes";
import FastFood from "./Pages/FastFood";
import Forniture from "./Pages/Forniture";
import Pets from "./Pages/Pets";
import Services from "./Pages/Services";
import Sport from "./Pages/Sports";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function RoutesApp() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/fastfood" element={<FastFood/>}></Route>
        <Route exact path="/barber" element={<Barber/>}></Route>
        <Route exact path="/clothes" element={<Clothes/>}></Route>
        <Route exact path="/furniture" element={<Forniture/>}></Route>
        <Route exact path="/beauty" element={<Beauty/>}></Route>
        <Route exact path="/pets" element={<Pets/>}></Route>
        <Route exact path="/sport" element={<Sport/>}></Route>
        <Route exact path="/services" element={<Services/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
