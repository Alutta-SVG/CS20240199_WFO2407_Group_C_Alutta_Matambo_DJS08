import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <h1>About #VanLife</h1>
      <p>
        We offer the best vans for your road trip adventures.
      </p>
      <Link className="link-button" to="/vans">
        Explore Vans
      </Link>
    </div>
  );
}
