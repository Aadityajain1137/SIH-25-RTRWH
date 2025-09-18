import "./Types.css";
import { Link } from "react-router-dom";

const Types = () => {
  return (
    <div className="types">
      <h1>Methods of Rooftop Rain Water Harvesting</h1>
      <div className="types-container">

        <div className="types-box">
          <h3>Storage in Tanks</h3>
          <img src="https://www.inrainwaterharvesting.com/images/products/rooftop-rainwater-harvesting.jpg" alt="Storage in Tanks" />
          <p>Collects and stores rainwater in tanks for daily use.</p>
          <Link to="/storage"><button className="btn">Learn More</button></Link>
        </div>

        <div className="types-box">
          <h3>Groundwater Recharge</h3>
          <img src="https://smartcentregroup.com/wp-content/uploads/2018/09/tube-recharge-one.png" alt="Groundwater Recharge" />
          <p>Directs water into recharge pits and wells to replenish groundwater.</p>
          <Link to="/recharge"><button className="btn">Learn More</button></Link>
        </div>

        <div className="types-box">
          <h3>Combination of Both</h3>
          <img src="https://connect.iisc.ac.in/wp-content/uploads/2019/09/3-1-1024x992.jpg" alt="Combination of Both" />
          <p>Stores water for use and diverts excess into groundwater recharge.</p>
          <Link to="/combination"><button className="btn">Learn More</button></Link>
        </div>

      </div>
    </div>
  );
};

export default Types;
