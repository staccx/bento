import React from "react"
import { RadialBarChart, RadialBar } from "recharts"

const G = () => (
  <RadialBarChart
    data={[
      {
        uv: 75
      }
    ]}
  >
    <RadialBar
      minAngle={15}
      label={{ fill: "#666", position: "insideStart" }}
      background
      clockWise
      dataKey="uv"
    />
  </RadialBarChart>
)

export default G
