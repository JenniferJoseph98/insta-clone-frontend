import React from "react";
import "../styles/landing.css";

import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="zoom-in-zoom-out">
        <img
          className="animation"
          src="https://besthqwallpapers.com/Uploads/31-3-2021/160273/thumb2-instagram-glitter-logo-black-background-instagram-logo-purple-glitter-art-instagram.jpg"
          alt="Instaimg"
        />
      </div>
      <button className="btn" onClick={() => navigate("postview")}>
        Enter
      </button>
    </div>
  );
}
