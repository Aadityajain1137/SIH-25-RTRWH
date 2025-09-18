import React from "react";
import "./GovSchemes.css";

const schemes = [
  {
    name: "Catch the Rain (CTR)",
    type: "Central Government",
    description: "Promotes water conservation and rainwater harvesting in water-stressed areas across India.",
    link: "https://nwm.gov.in/catchtherain",
  },
  {
    name: "Atal Bhujal Yojana",
    type: "Central Government",
    description: "Supports groundwater management and provides funding for community rainwater harvesting projects.",
    link: "https://shop.rainyfilters.com/blogs/page/government-schemes-rainwater-harvesting-india?srsltid=AfmBOooLwqxXcwEdk1fXr_cQrTitP9IoLnRKTBlVtI9viPGc91QJ2PPx",
  },
  
  {
    name: "Farm Pond Scheme",
    type: "Rajasthan State",
    description: "Subsidy for constructing farm ponds; benefits farmers in drought-prone areas.",
    link: "https://shop.rainyfilters.com/blogs/page/government-rainwater-harvesting-subsidies-2025?srsltid=AfmBOopRG8oo28HADS_HaVmo2grnorOuN4DRM5M4ZH-u6ys6NNQv9Zo7",
  }
];

export default function GovSchemes() {
  return (
    <div className="schemes-container">
      <h2 className="schemes-title">Government Schemes for Rainwater Harvesting in India</h2>
      <div className="schemes-grid">
        {schemes.map((scheme, index) => (
          <div key={index} className="scheme-card">
            <h3 className="scheme-name">{scheme.name}</h3>
            <p className="scheme-type">{scheme.type}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="scheme-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
