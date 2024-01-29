import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pioneiros from "../pages/Pioneiros/Pioneiros";
import Pioneiro from "../pages/Pioneiro/Pioneiro";
import About from "../pages/About/About";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pioneiros" element={<Pioneiros />} />
      <Route path="/pioneiro/:name" element={<Pioneiro />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
