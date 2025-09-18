import { Link } from "react-router-dom";
import "./FormHarvest.css";

const FormHarvest = () => {
  return (
    <div className="types-box">
      <h3 className="title">Rainwater Harvesting Estimator</h3>
      <img
        className="image"
        src="https://www.cag.org.in/sites/default/files/2020-11/rainwater-harvesting-system-isometric-diagram-rainwater-harvesting-system-isometric-diagram-vector-illustration-scheme-hose-170058717.jpg"
        alt="Harvesting Estimator"
      />
      <p className="description">
        Estimate how much water you can harvest from your rooftop.
      </p>
      <Link to="/estimator">
        <button className="btn">Open Estimator</button>
      </Link>
    </div>
  );
};

export default FormHarvest;
