import React from "react"
import styled from "styled-components"
import { List, ExpandListItem, Wrapper, fontSmoothing } from "@staccx/base"

const PortfolioFilter = () => (
  <Wrapper>
    <List>
      <Expand
        title="Showing medium risk, long term with sectors for Europe & Digitalisation"
        id="gfdgsfd54"
      >
        Filter
      </Expand>
    </List>
  </Wrapper>
)

const Expand = styled(ExpandListItem)`
  > button {
    ${fontSmoothing};
    display: flex;
    align-items: center;
    color: ${p => p.theme.color.white};
    background: linear-gradient(
      90deg,
      ${p => p.theme.gradient.laser[0]} 8.41%,
      ${p => p.theme.gradient.laser[1]} 95.8%
    );
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 4px rgba(0, 0, 0, 0.02),
      0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03),
      0px 32px 32px rgba(0, 0, 0, 0.03), 0px 64px 64px rgba(0, 0, 0, 0.03);
    border-radius: 15px;
    &:hover,
    &:focus {
      color: ${p => p.theme.color.white};
      > svg {
        fill: ${p => p.theme.color.white} !important;
      }
    }
  }
`

export default PortfolioFilter
