import "./Combination.css";
export default function Combination() {
  return (
    <div className="combined-container">
      <h1 className="heading">
        Combined Rainwater Management
      </h1>
      <p className="about">
        The most effective rainwater harvesting system combines both
        storage in tanks and groundwater recharge. This ensures
        immediate water availability for daily needs while also
        replenishing underground aquifers for long-term sustainability.
      </p>

      <section className="storage-section">
        <div className="header">
          <h2 className="storage-title">How to Implement Combined Rainwater Management</h2>
        <p className="storage-intro">
          Follow these steps to integrate both tank storage and groundwater
          recharge for maximum efficiency:
        </p>
        </div>
        

        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <div className="step-content">
              <h3>Design a Dual System</h3>
              <p>
                Plan a system that diverts rooftop rainwater into both a
                storage tank and recharge pits simultaneously.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <div className="step-content">
              <h3>Install Storage Tank</h3>
              <p>
                Connect roof gutters to a storage tank for immediate household
                water use.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <div className="step-content">
              <h3>Build Recharge Pits</h3>
              <p>
                Construct recharge pits filled with filter media to allow excess
                water to percolate into the ground.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <div className="step-content">
              <h3>Use Filters & First-Flush</h3>
              <p>
                Install filters and first-flush systems before both the tank and
                recharge pits to maintain water quality.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">5</span>
            <div className="step-content">
              <h3>Maintain Both Systems</h3>
              <p>
                Clean the tank, gutters, and recharge pits regularly to ensure
                long-term effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h3 className="benefits">Benefits</h3>
      <ul className="list">
        <li>Provides immediate water for daily use and long-term storage in aquifers.</li>
        <li>Maximizes rainwater utilization with minimal wastage.</li>
        <li>Reduces pressure on municipal water supply systems.</li>
        <li>Prevents flooding and improves groundwater levels at the same time.</li>
      </ul>

      <img
        src="https://static.javatpoint.com/tutorial/rainwater-harvesting/images/rainwater-harvesting.png"
        alt="Combined Rainwater Management Illustration"
      />
    </div>
  );
}
