import React from "react"
import styled from "styled-components"
import { ItemGroup } from "@staccx/base"
import { color } from "@staccx/theme"

const StepIndicator = ({ totalSteps, currentStep }) => (
  <ItemGroup>
    {[...Array(totalSteps)].map((step, index) => (
      <StepIndication
        currentStep={currentStep}
        index={index}
        totalSteps={totalSteps}
        key={index + "stepNumber"}
      />
    ))}
  </ItemGroup>
)

const StepIndication = styled.span`
  background-color: ${p =>
    p.currentStep <= p.index ? "#B4CBCF" : color("darkBlue")};
  display: inline-block;
  height: 4px;
  width: 50px;
`

export default StepIndicator
