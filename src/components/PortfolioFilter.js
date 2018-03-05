import React from "react"
import styled from "styled-components"
import { List, ExpandListItem, Wrapper, fontSmoothing } from "@staccx/base"

const Showing = ({ risk, duration, sectors }) => {
  return (
    <span>
      Showing <strong>{risk}</strong> risk, <strong>{duration} term</strong>,
      with extra focus on{" "}
      <strong>
        {sectors.length > 1
          ? sectors.slice(0, sectors.length - 1).join(", ") +
            " & " +
            sectors.slice(-1).map(sector => sector)
          : sectors}
      </strong>
    </span>
  )
}

const PortfolioFilter = () => (
  <List>
    <Expand
      title={
        <Showing
          risk="medium"
          duration="short"
          sectors={["Europe", "Digitalization"]}
        />
      }
      id="gfdgsfd54"
    >
      Filter
    </Expand>
  </List>
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
