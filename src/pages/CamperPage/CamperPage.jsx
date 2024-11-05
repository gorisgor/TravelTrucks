import React, { useState } from 'react';
import Features from '../../components/Features/Features';
import Reviews from '../../components/Reviews/Reviews';
import css from './CamperPage.module.css';



export default function CamperPage() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div>
      <h1>Camper Details</h1>
      <div>
        <button onClick={() => setActiveTab("features")}>Features</button>
        <button onClick={() => setActiveTab("reviews")}>Reviews</button>
      </div>

      {activeTab === "features" && <Features />}
      {activeTab === "reviews" && <Reviews />}
    </div>
  );
}


