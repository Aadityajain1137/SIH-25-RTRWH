import "./Recharge.css";
export default function GroundWater() {
  return (
    <div className="groundwater-container">
      <h1 className="heading">Groundwater Recharge</h1>
      <p className="about">
        Groundwater recharge is the process of allowing rainwater to seep into
        the soil and refill underground aquifers. This method helps in
        maintaining the water table, reducing water scarcity, and ensuring
        sustainable use of natural resources.
      </p>

      <section className="storage-section">
        <div className="header">
          <h2 className="storage-title">
            {" "}
            How to Implement Groundwater Recharge
          </h2>
          <p className="storage-intro">
            Follow these steps to effectively recharge groundwater using
            rainwater:
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <div className="step-content">
              <h3>Identify a Suitable Area</h3>
              <p>
                Select an open land or garden space where rainwater naturally
                accumulates or flows.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <div className="step-content">
              <h3>Construct Recharge Pits or Trenches</h3>
              <p>
                Dig recharge pits, trenches, or borewells that allow water to
                percolate into the ground.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <div className="step-content">
              <h3>Use Filter Media</h3>
              <p>
                Fill the pits with layers of gravel, sand, and pebbles to filter
                impurities before water enters the soil.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <div className="step-content">
              <h3>Connect Roof Water</h3>
              <p>
                Channel rooftop rainwater through pipes and filters directly
                into recharge pits or wells.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-number">5</span>
            <div className="step-content">
              <h3>Maintain the System</h3>
              <p>
                Clean filters, remove debris, and inspect recharge pits
                regularly to keep the system effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h3 className="benefits">Benefits</h3>
      <ul className="list">
        <li>Improves groundwater levels and prevents depletion.</li>
        <li>Reduces urban flooding by allowing water to seep underground.</li>
        <li>Ensures long-term availability of water for communities.</li>
        <li>Minimizes soil erosion and enhances soil moisture.</li>
      </ul>

      <img
        src="https://smartcentregroup.com/wp-content/uploads/2018/09/tube-recharge-one.png"
        alt="Groundwater Recharge Illustration"
      />
    </div>
  );
}
