import React from "react";
import {
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBarChart,
  RadialBar,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Monday",
    pv: 12,
    fill: "#3F84FC",
  },
  {
    name: "Tuesday",
    pv: 19,
    fill: "#727F94",
  },
  {
    name: "Wednesday",

    pv: 3,
    fill: "#1DAB47",
  },
  {
    name: "Thursday",
   pv: 5,
    fill: "#FD7E14",
  },
  {
    name: "Friday",
    pv: 2,
    fill: "#FC413F",
  },

];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PolarChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <RadialBarChart
          innerRadius="10%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="pv"
          />  
          <Legend
            iconSize={20}
            // width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip contentStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#FFFFFF",
              padding: "2px",
            }} />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
};

export default PolarChart;
