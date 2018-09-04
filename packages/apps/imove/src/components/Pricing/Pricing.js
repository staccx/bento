import React from "react"
import styled from "styled-components"
import { color, spacing, font } from "@staccx/theme"
import { Wrapper, Heading } from "@staccx/base"

const Pricing = ({ heading, copy, img, children }) => (
  <Content bg={img}>
    <Wrapper>
      <StyledHeading level={2}>{heading}</StyledHeading>
      <Copy>{copy}</Copy>
      <List>{children}</List>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  background-color: ${color("secondary")};
  font-size: ${font("largePlus")};
  color: ${color("white")};
  text-align: center;
  padding: ${spacing("huge")} 0 calc(${spacing("huge")} + 20px);
  background-image: url(${p => p.bg});
  background-size: contain;
  background-repeat: no-repeat;
`

const StyledHeading = styled(Heading)`
  padding-bottom: calc(${spacing("medium")});
`

const Copy = styled.p`
  padding: 0 0 ${spacing("large")};
`

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`

export default Pricing
