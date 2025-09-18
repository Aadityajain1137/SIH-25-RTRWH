import data from "../data/areas.json";
import "./Form.css"; 
import { useState } from "react";

const Checkwater = () => {
  const [form, setForm] = useState({
    name: "",
    location: "Jaipur",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationData = data.find((d) => d.location === form.location);

    setResult({
      ...form,
      ...locationData,
    });
    setForm({
    name: "",
    location: "Jaipur",
    });
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Check Ground Water Level</h2>

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
              <strong>Groundwater Depth:</strong> {result.groundwaterDepth} m
            </p>
            <button onClick={() => setResult(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkwater;
