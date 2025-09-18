import { Link } from "react-router-dom";
import "./FormLevel.css";

const FormLevel = () => {
  return (
    <div className="types-box">
      <h3 className="title">Groundwater Level Checker</h3>
      <img
        className="image"
        src="https://marvel-b1-cdn.bc0a.com/f00000000170758/www.ysi.com/image%20library/parameters/level/water-level-groundwater-submersible-pressure-transducer.jpg"
        alt="Groundwater Level"
      />
      <p className="description">
        Check feasibility of groundwater levels in your area.
      </p>
      <Link to="/check-water">
        <button className="btn">Check Now</button>
      </Link>
    </div>
  );
};

export default FormLevel;
