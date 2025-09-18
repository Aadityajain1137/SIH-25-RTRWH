import { useState } from "react";
import data from "../data/areas.json";
import "./Form.css";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    location: "Jaipur",
    roofArea: "",
    roofType: "concrete", // NEW FIELD
    openSpace: "",
    dwellers: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationData = data.find((d) => d.location === form.location);

    // Runoff coefficients
    const coefficients = {
      concrete: 0.95,
      tiles: 0.8,
      soil: 0.7,
    };

    const runoffCoefficient = coefficients[form.roofType];
    const rainfall = locationData.rainfall; // mm/year
    const area = parseFloat(form.roofArea); // m²

    // Convert mm to meters for volume (1 mm = 0.001 m)
    const waterHarvested = rainfall * 0.001 * runoffCoefficient * area; // m³/year
    const litersHarvested = waterHarvested * 1000; // liters/year
    const cost = area * 50;

    setResult({
      ...form,
      ...locationData,
      runoffCoefficient,
      litersHarvested,
      cost,
    });

    // Reset form
    setForm({
      name: "",
      location: "Jaipur",
      roofArea: "",
      roofType: "concrete",
      openSpace: "",
      dwellers: "",
    });
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Rainwater Harvesting Estimator</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <select name="location" value={form.location} onChange={handleChange}>
          {data.map((d) => (
            <option key={d.location} value={d.location}>
              {d.location}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="roofArea"
          placeholder="Roof Area (m²)"
          value={form.roofArea}
          onChange={handleChange}
          required
        />

        {/* NEW ROOF TYPE FIELD */}
        <select
          name="roofType"
          value={form.roofType}
          onChange={handleChange}
          required
        >
          <option value="concrete">Concrete Roof</option>
          <option value="tiles">Tiles Roof</option>
          <option value="soil">Loose Soil Roof</option>
        </select>


        <button type="submit">Check Feasibility</button>
      </form>

      {result && (
        <div className="result-popup" onClick={() => setResult(null)}>
          <div
            className="result-container"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Result for {result.name}</h2>
            <p>
              <strong>Location:</strong> {result.location}
            </p>
            <p>
              <strong>Annual Rainfall:</strong> {result.rainfall} mm
            </p>
            <p>
              <strong>Roof Type:</strong> {result.roofType} (C ={" "}
              {result.runoffCoefficient})
            </p>
            <p>
              <strong>Estimated Water Harvested:</strong>{" "}
              {result.litersHarvested.toFixed(0)} m³/year
            </p>
            <p>
              <strong>Estimated Cost:</strong> ₹{result.cost}
            </p>
            <p>
              <strong>Suggested Structure:</strong> Recharge Pit
            </p>
            <button onClick={() => setResult(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
