// Market.jsx
import { useState } from "react";
import { marketData } from "./marketData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Market() {
  const [selectedState, setSelectedState] = useState("All");

  // Filter data based on selected state
  const filteredData =
    selectedState === "All"
      ? marketData
      : marketData.filter((item) => item.state === selectedState);

  // Get unique states for dropdown
  const states = ["All", ...new Set(marketData.map((item) => item.state))];

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Market Prices 📈
      </h1>

      {/* State Filter */}
      <div className="mb-6">
        <label className="mr-2 font-semibold">Select State:</label>
        <select
          className="p-2 rounded border border-gray-300"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.map((state, idx) => (
            <option key={idx} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-1">{item.crop}</h2>
            <p className="text-gray-600 mb-2">
              Price: <b>{item.price}</b>
            </p>
            <p className="text-gray-500 mb-2">Market: {item.market}</p>
            <p
              className={`mb-3 font-semibold ${
                item.trend === "up" ? "text-green-600" : "text-red-500"
              }`}
            >
              {item.trend === "up" ? "↑ Rising" : "↓ Falling"}
            </p>

            {/* Trend Graph */}
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={item.trendData}>
                  <XAxis dataKey="day" hide />
                  <YAxis hide domain={["dataMin", "dataMax"]} />
                  <Tooltip
                    formatter={(value) => `₹${value}`}
                    labelFormatter={(label) => `Day: ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={item.trend === "up" ? "#16a34a" : "#dc2626"}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Market;
