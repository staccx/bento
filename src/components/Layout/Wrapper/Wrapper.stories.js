import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"
import Wrapper from "./Wrapper"
import docs from "./Wrapper.md"

storiesOf("components|base/Layout/Wrapper", module).add(
  "Test",
  () => {
    const DemoElementAroundWrapper = styled.div`
      background-color: rgba(70, 126, 255, 0.2);
      min-width: 300px;
    `

    const Example = styled.div`
      background-color: rgba(70, 126, 255, 0.2);
      width: 100%;
      height: 50px;
    `
    return (
      <DemoElementAroundWrapper>
        <Wrapper>
          <Example />
        </Wrapper>
      </DemoElementAroundWrapper>
    )
  },
  { info: { text: docs } }
)
