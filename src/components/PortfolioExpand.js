import React from "react"
import styled from "styled-components"
import { List, ExpandListItem } from "@staccx/base"
import Fraction from "./Fraction"

const Title = ({ fundName, index }) => (
  <React.Fragment>
    <ColorIndicator width="24" height="24" viewBox="0 0 24 24" index={index}>
      <circle cx="12" cy="12" r="12" fillRule="evenodd" />
    </ColorIndicator>
    {fundName}
  </React.Fragment>
)

const ColorIndicator = styled.svg`
  fill: ${p => p.theme.graphColor[p.index]};
  margin-right: ${p => p.theme.spacing.small};
`

const PortfolioExpand = ({ funds }) => (
  <List>
    {funds.map((fund, index) => (
      <Expand
        index={index}
        title={<Title fundName={fund.instrument.name} index={index} />}
        key={fund.instrument.name}
        id={fund.instrument.name}
      >
        {fund.instrument.name} <br />
        Prosent: {fund.weight} <br />
        Pris: {fund.instrument.expenseRatio}%
        <Fraction value={3} max={6} />
      </Expand>
    ))}
  </List>
)

const Expand = styled(ExpandListItem)`
  > button {
    display: flex;
    align-items: center;
  }
  > div {
    background-color: #fcfcfc;
    border: 1px solid ${p => p.theme.color.line};
    position: relative;
    max-width: 100%;
    margin-bottom: -1px;
    position: relative;
    padding: ${p => p.theme.spacing.medium};
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 6px;
      background-color: ${p => p.theme.graphColor[p.index]};
    }
  }
`

export default PortfolioExpand
