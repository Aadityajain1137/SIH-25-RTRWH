import { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const slides = [
    {
      image: "/sih1.png",
      text: "4,000,000,000 people suffering severe water scarcity every year.",
      button: {
        label: "Learn More",
        bg: "#00c4ff",
        text: "#00264d",
        link: "https://unu.edu/inweh/news/un-invest-nature-cut-billion-dollar-costs-droughts",
      },
    },
    {
      image: "/hero2.png",
      text: "As droughts fueled by human destruction of the environment are projected to affect 3 in 4 people by 2050.",
      button: {
        label: "Discover How",
        bg: "#28a745",
        text: "#fff",
        link: "https://www.unicef.org/wash/water-scarcity",
      },
    },
    {
      image: "/sih3.jpg",
      text: "The number of large cities facing water scarcity is expected to rise from 193 (37%) in 2016 to 292 (56%) by 2050.",
      button: {
        label: "Get Involved",
        bg: "#ff5733",
        text: "#fff",
        link: "https://www.edengreen.com/blog-collection/what-is-water-scarcity",
      },
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content fade">
          <h1>{slides[current].text}</h1>
          <a
            href={slides[current].button.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            style={{
              backgroundColor: slides[current].button.bg,
              color: slides[current].button.text,
            }}
          >
            {slides[current].button.label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
