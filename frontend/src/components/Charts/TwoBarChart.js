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

const TwoBarChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data}>
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
          <Bar dataKey="blue" fill="#1F71FF" />
          <Bar dataKey="red" fill="#FD221F" />
          {/* barSize={55}
          barSize={55} */}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default TwoBarChart;
