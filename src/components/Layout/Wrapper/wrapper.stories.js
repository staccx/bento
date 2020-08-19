import React from "react"
import Wrapper from "./Wrapper"

export default {
  title: "New/Components/Layout/Wrapper",
  component: Wrapper
}

export const WrapperStandard = args => (
  <Wrapper>
    <Wrapper size="small">
      <div style={{ backgroundColor: "#FFE74C", padding: 10 }}>
        Wrapper small
      </div>
    </Wrapper>
    <Wrapper size="medium">
      <div style={{ backgroundColor: "#FF5964", padding: 10 }}>
        Wrapper medium
      </div>
    </Wrapper>
    <Wrapper size="large">
      <div style={{ backgroundColor: "#38618C", padding: 10, color: "white" }}>
        Wrapper large
      </div>
    </Wrapper>
    <Wrapper breakout>
      <div style={{ backgroundColor: "#35A7FF", padding: 10, color: "white" }}>
        Wrapper default with breakout
      </div>
    </Wrapper>
  </Wrapper>
)
