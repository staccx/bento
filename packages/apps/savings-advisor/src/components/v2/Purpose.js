import React from "react"
import RadioSelect from "./RadioSelect"

const Purpose = ({ setState, ...props }) => (
  <RadioSelect
    onChange={({ value: purpose }) => setState({ purpose })}
    groupName={"purposeSelect"}
    initialSelected={props.purpose || 0}
    {...props}
  />
)

export default Purpose
