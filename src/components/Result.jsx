export default function Result({ data }) {
  if (!data) return null;

  const runoffCoefficient = 0.8;
  const waterHarvested = data.roofArea * data.rainfall * runoffCoefficient;
  const cost = data.roofArea * 50;

  return (
    <div className="p-4">
      <h2>Result for {data.name}</h2>
      <p>Location: {data.location}</p>
      <p>Annual Rainfall: {data.rainfall} mm</p>
      <p>Groundwater Depth: {data.groundwaterDepth} m</p>
      <p>Estimated Water Harvested: {waterHarvested.toFixed(0)} liters/year</p>
      <p>Estimated Cost: ₹{cost}</p>
      <p>Suggested Structure: Recharge Pit</p>
    </div>
  );
}
