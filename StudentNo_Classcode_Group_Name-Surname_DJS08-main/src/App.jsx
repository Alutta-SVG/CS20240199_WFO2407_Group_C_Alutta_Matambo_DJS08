/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout";
import Home from "./Home";
import About from "./About";
import Vans from "../Vans/Vans";
import VanDetail from "../Vans/Vansdetail";
import HostLayout from "./Components/HostLayout";   
import Dashboard from "./Components/Host/Dashboard";
import Income from "./Components/Host/Income";
import Reviews from "./Components/Host/Reviews";
import AuthRequired from "./Components/AuthRequired";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} /> {/* Vans route outside /host */}
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;