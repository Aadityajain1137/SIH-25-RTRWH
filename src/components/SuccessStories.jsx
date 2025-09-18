import React from "react";
import "./SuccessStories.css";

const stories = [
  {
    name: "Ram Singh",
    quote: "Our rooftop rainwater harvesting system transformed our water availability and income.",
    location: "Rajasthan",
    waterSaved: 12000, // in liters
  },
  {
    name: "Madiya Kachar Village",
    quote: "The rooftop rainwater harvesting system improved water quality and reduced absenteeism.",
    location: "Bilaspur, Chhattisgarh",
    waterSaved: 8000,
  },
  {
    name: "Vadgam Village",
    quote: "Community-led rainwater harvesting initiatives restored water availability.",
    location: "Banaskantha, Gujarat",
    waterSaved: 18000,
  },
  {
    name: "Basel Mission Girls High School",
    quote: "Rainwater harvesting ensured clean drinking water for students.",
    location: "Dharwad, Karnataka",
    waterSaved: 5000,
  },
];

export default function SuccessStories() {
  return (
    <div className="success-container">
      <h2 className="success-title">Success Stories of Rainwater Harvesting in India</h2>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <div className="story-header">
              <div className="story-icon">💧</div>
              <h3 className="story-name">{story.name}</h3>
              <p className="story-location">{story.location}</p>
            </div>
            <p className="story-quote">"{story.quote}"</p>

            <div className="water-saved">
              <p>💦 Water Saved: <strong>{story.waterSaved.toLocaleString()} L</strong></p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.min(story.waterSaved / 20000 * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
