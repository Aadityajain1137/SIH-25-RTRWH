import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./FinancialProjection.css";

// Example realistic rupee values (20 years)
const data = [
  { year: 1, savings: -25000 },
  { year: 2, savings: -15000 },
  { year: 3, savings: -5000 },
  { year: 4, savings: 5000 },
  { year: 5, savings: 15000 },
  { year: 6, savings: 25000 },
  { year: 7, savings: 35000 },
  { year: 8, savings: 45000 },
  { year: 10, savings: 60000 },
  { year: 12, savings: 75000 },
  { year: 15, savings: 95000 },
  { year: 20, savings: 130000 },
];

export default function FinancialProjection() {
  // Example financial summary
  const waterSavings = 119810; // ₹ over 20 years
  const propertyIncrease = 15000;
  const taxIncentives = 6250;
  const totalBenefits = waterSavings + propertyIncrease + taxIncentives;
  const investment = 25000; // assume installation cost
  const netReturn = totalBenefits - investment;
  const roi = ((netReturn / investment) * 100).toFixed(0);

  return (
    <div className="projection-card">
      <h2 className="projection-heading">📈 20-Year Financial Projection</h2>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: "Years", position: "insideBottomRight", offset: -5 }} />
          <YAxis
            tickFormatter={(value) => `₹${value / 1000}k`}
            label={{ value: "Savings (₹)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          <Line type="monotone" dataKey="savings" stroke="#00C49F" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Financial details */}
      <div className="financial-details">
        <div className="benefits">
          <h3>Total Benefits (20 years)</h3>
          <p>Water bill savings: <span>₹{waterSavings.toLocaleString()}</span></p>
          <p>Property value increase: <span>₹{propertyIncrease.toLocaleString()}</span></p>
          <p>Tax incentives: <span>₹{taxIncentives.toLocaleString()}</span></p>
          <p className="total">Total Benefits: <span>₹{totalBenefits.toLocaleString()}</span></p>
        </div>

        <div className="net-return">
          <h3>Net Return</h3>
          <h2 className="highlight">₹{netReturn.toLocaleString()}</h2>
          <p>{roi}% return on investment</p>
          <p className="note">💡 Your rainwater system pays for itself in ~4 years and generates big savings thereafter.</p>
        </div>
      </div>
    </div>
  );
}
