import React from "react"
import { Line, Tooltip, XAxis, YAxis, LineChart } from "recharts"
import styled from "styled-components"

const Chart = ({ data, tick, stroke }) => {
  return (
    <StyledLineChart
      width={378}
      height={164}
      data={data}
      nameKey={"name"}
      margin={{ top: 15, right: 50, left: 0, bottom: 5 }}
    >
      <XAxis dataKey="date" tick={tick} />
      <YAxis
        dataKey="value"
        domain={["dataMin - 0.1", "dataMax"]}
        allowDecimals
        tick={tick}
      />
      {/* <CartesianGrid stroke="#f5f5f5" /> */}
      <Tooltip labelStyle={{ color: stroke }} />
      <Line
        type="monotone"
        dataKey="value"
        stroke={stroke}
        yAxisId={0}
        dot={false}
        activeDot
      />
    </StyledLineChart>
  )
}

const StyledLineChart = styled(LineChart)`
  margin-left: -15px;
`

export default Chart
