import React from "react";
import "./EnvironmentalStats.css";

export default function EnvironmentalStats() {
  const stats = [
    {
      icon: "🌡️",
      value: "3.2°F",
      label: "Global temperature rise since 1880",
    },
    {
      icon: "🌧️",
      value: "20%",
      label: "Increase in extreme precipitation events",
    },
    {
      icon: "💧",
      value: "1%",
      label: "Of water on Earth is accessible freshwater",
    },
    {
      icon: "🏠",
      value: "300",
      label: "Gallons used by average household daily",
    },
  ];

  return (
    <div className="projection-card">
      <h2 className="projection-heading">Environmental Impact Statistics</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="financial-details">
        <div className="benefits">
          <h3>Benefits of Water Conservation</h3>
          <p>Water Saved: <span>50,000 L/year</span></p>
          <p>Energy Saved: <span>1,200 kWh/year</span></p>
          <p className="total">Total Savings: $600/year</p>
        </div>

        <div className="net-return">
          <h3>Net Environmental Impact</h3>
          <div className="highlight">🌍 Positive</div>
          <p>Contributing to a sustainable environment.</p>
          <p className="note">Data based on average household usage.</p>
        </div>
      </div>
    </div>
  );
}
