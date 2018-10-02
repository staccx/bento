import React from "react"
import styled from "styled-components"
import { Heading } from "@staccx/base"
import { color, font } from "@staccx/theme"

const HeroBlob = ({ logo, heading, headingSub }) => (
  <Content>
    <Inner>
      <div>
        <img src={logo} alt="imove" />
        <StyledHeading level={2}>{heading}</StyledHeading>
        <div>{headingSub}</div>
      </div>
    </Inner>
  </Content>
)

const Content = styled.div`
  background-color: ${color("primary")};
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 100%;
  border-bottom-right-radius: 0;
  position: relative;
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledHeading = styled(Heading)`
  color: ${color("white")};
  font-size: ${font("huge")};
`

export default HeroBlob
