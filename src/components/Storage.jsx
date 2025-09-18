import './Storage.css';
export default function Storage() {
  return (
    <div className="storage-container">
      <h1 className='heading'>Storage in Tanks</h1>
      <p className='about'>Collecting rainwater in tanks is a simple yet highly effective way to ensure a reliable water supply for daily needs. Rainwater from rooftops or paved areas can be directed into storage tanks, providing clean water for drinking, cleaning, gardening, and other household uses.</p>

      <section className="storage-section">
        <div className='header'>
      <h2 className="storage-title">How to Install a Storage Tank</h2>
      <p className="storage-intro">
        Installing a rainwater harvesting storage tank is simple and ensures a
        reliable water source. Follow these steps:
      </p>
        </div>
      <div className="steps">
        <div className="step">
          <span className="step-number">1</span>
          <div className="step-content">
            <h3>Plan the System</h3>
            <p>
              Assess your roof area and choose the right tank size based on your
              water needs.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">2</span>
          <div className="step-content">
            <h3>Select the Tank Location</h3>
            <p>
              Place the tank on a strong, level base near downpipes and in a shaded
              area if possible.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">3</span>
          <div className="step-content">
            <h3>Install Gutters & Downpipes</h3>
            <p>
              Fit gutters along the roof and connect downpipes to channel water into
              the tank.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">4</span>
          <div className="step-content">
            <h3>Add a Filter & First-Flush</h3>
            <p>
              Use a mesh filter to block debris and a first-flush diverter to remove
              dirty water.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">5</span>
          <div className="step-content">
            <h3>Connect to the Tank</h3>
            <p>
              Install inlet and overflow pipes. Use a tight-fitting lid to keep out
              insects and dirt.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">6</span>
          <div className="step-content">
            <h3>Install a Tap or Pump</h3>
            <p>
              Add a bottom tap or pump for easy access and household distribution.
            </p>
          </div>
        </div>

        <div className="step">
          <span className="step-number">7</span>
          <div className="step-content">
            <h3>Maintain Regularly</h3>
            <p>
              Clean gutters and filters monthly. Wash the tank yearly for best water
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>

       <h3 className='benefits'>Benefits</h3>
       <ul className='list'>
        <li>Ensures a consistent supply of water during dry periods.</li>
        <li>Reduces dependency on municipal water systems.</li>
        <li>Helps in conserving natural water resources.</li>
        <li>Provides water for emergency situations or unexpected shortages.</li>
       </ul>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2yL2oIKU_WzbL-sQ7On49k_R5GPtx1oL0izc_kAvgVv7E-SPksJFd98P4jxPYHV0DJM&usqp=CAU" alt="" />
    </div>
  );
}
