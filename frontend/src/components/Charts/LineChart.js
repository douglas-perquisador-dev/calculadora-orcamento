import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from "recharts";

const data = [
  {
    name: "Monday",
    blue: 12,
    red: 14,
  },
  {
    name: "Tuesday",
    blue: 19,
    red: 2,
  },
  {
    name: "Wednesday",
    blue: 3,
    red: 11,
  },
  {
    name: "Thursday",
    blue: 5,
    red: 12,
  },
  {
    name: "Friday",
    blue: 2,
    red: 4,
  },
];

const LineCharts = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#FFFFFF",
              padding: "2px",
            }}
          />
          <Line
            type="monotone"
            dataKey="blue"
            stroke="#1F71FF"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="red"
            stroke="#FD221F"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineCharts;
