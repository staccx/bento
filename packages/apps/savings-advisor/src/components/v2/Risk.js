import React from "react"
import RadioSelect from "./RadioSelect"

export default ({ setState, ...props }) => (
  <RadioSelect
    onChange={({value: risk}) => setState({ risk })}
    groupName={"riskSelect"}
    {...props}
  />
)
