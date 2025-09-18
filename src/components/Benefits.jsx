import "./Benefits.css";
import { FaRupeeSign, FaLeaf, FaHome, FaTint, FaShieldAlt, FaUsers } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Benefits of Rainwater Harvesting</h2>
      <p className="benefits-subtitle">
        Discover the wide-ranging advantages for your wallet, property, and the environment
      </p>

      <div className="benefits-grid">
        {/* Financial Benefits */}
        <div className="benefit-card">
          <FaRupeeSign className="benefit-icon" />
          <h3>Financial Benefits</h3>
          <ul>
            <li>💰 Reduce water bills by <strong>30–50%</strong></li>
            <li>🏠 <div>Increase property value <br /> by 2–5% </div> </li>
            <li>💧 Quality water for non-drinkable uses</li>
            <li>📉 Lower stormwater fees</li>
            <li><strong>Estimated Savings:</strong> ₹5,000–₹20,000/year</li>
          </ul>
        </div>

        {/* Environmental Benefits */}
        <div className="benefit-card">
          <FaLeaf className="benefit-icon" />
          <h3>Environmental Benefits</h3>
          <ul>
            <li>🌍 Reduce carbon footprint</li>
            <li>🚱 Minimize water pollution</li>
            <li>💧 Conserve groundwater</li>
            <li>🌊 Reduce flood risk</li>
            <li><strong>Impact Value:</strong> Priceless 🌱</li>
          </ul>
        </div>

        {/* Property Benefits */}
        <div className="benefit-card">
          <FaHome className="benefit-icon" />
          <h3>Property Benefits</h3>
          <ul>
            <li>🚰 Emergency water backup</li>
            <li>🌿 Better for plants & gardens</li>
            <li>🏗 Reduce foundation damage</li>
            <li>🌳 Landscape water independence</li>
            <li><strong>Added Value:</strong> ₹50,000+ over time</li>
          </ul>
        </div>

        {/* Water Quality Benefits */}
        <div className="benefit-card">
          <FaTint className="benefit-icon" />
          <h3>Water Quality Benefits</h3>
          <ul>
            <li>⚗ No chemical additives</li>
            <li>💧 Naturally soft water</li>
            <li>🧂 Lower mineral content</li>
            <li>⚙ Better for appliances</li>
            <li><strong>Household Savings:</strong> ₹2,000–₹5,000/year</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
