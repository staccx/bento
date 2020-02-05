import React from "react"
import styled from "styled-components"
import Wrapper from "./Wrapper"

const preview = {
  title: "Wrapper",
  category: "Components/Layout",
  component: Wrapper,
  render: props => (
    <DemoElementAroundWrapper>
      <Wrapper {...props}>
        <Example />
      </Wrapper>
    </DemoElementAroundWrapper>
  )
}

const DemoElementAroundWrapper = styled.div`
  background-color: rgba(70, 126, 255, 0.2);
  min-width: 300px;
`

const Example = styled.div`
  background-color: rgba(70, 126, 255, 0.2);
  width: 100%;
  height: 50px;
`

export default preview
