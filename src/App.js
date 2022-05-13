import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
