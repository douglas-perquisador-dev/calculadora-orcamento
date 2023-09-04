// CircleChart.jsx
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";


const data = [
  { name: "Monday", value: 12 },
  { name: "Tuesday", value: 19 },
  { name: "Wednesday ", value: 3 },
  { name: "Thursday", value: 5 },
  { name: "Friday", value: 2 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", '#E63946', '#F4A261', '#2A9D8F', '#264653', '#F1FAEE', '#9C89B8'];

const CircleChart = (props) => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart>
          <Pie
            data={props.data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(250, 250, 250, 0.8)",
              padding: "2px",
              color:"#fff"
            }}
            labelStyle={{color:"#fff"}}
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default CircleChart;
