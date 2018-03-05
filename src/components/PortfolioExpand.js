import React from "react"
import styled from "styled-components"
import { Sparklines, SparklinesLine } from "react-sparklines"
import { List, ExpandListItem, Wrapper, Fraction, Donut } from "@staccx/base"

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

const PortfolioExpand = ({ funds, selectedIndex, onClick }) => (
  <List>
    {funds.map((fund, index) => (
      <Expand
        index={index}
        title={<Title fundName={fund.instrument.name} index={index} />}
        key={fund.instrument.name}
        id={fund.instrument.name}
        expanded={selectedIndex !== null ? selectedIndex === index : false}
        onClick={() => onClick(index)}
      >
        <Wrapper size="small">
          <Halves>
            <div>
              <Mb>
                <Label>Risk</Label>
                <Fraction value={3} max={6} />
              </Mb>
              <Mb>
                <Label>Ethical</Label>
                <Fraction value={2} max={3} />
              </Mb>
              <Mb>
                <Label>{fund.weight * 100}% of portfolio</Label>
                <Donut percentage={fund.weight} />
              </Mb>
            </div>
            <div>
              <Mb>
                <Label>Last 5 years</Label>
                <Sparklines
                  data={[5, 10, 5, 10, 8, 10, 5, 10, 8, 4, 5, 2, 8, 15]}
                  height={25}
                  margin={6}
                >
                  <SparklinesLine
                    style={{ strokeWidth: 3, stroke: "#2D9CDB", fill: "none" }}
                  />
                </Sparklines>
              </Mb>
              <Mb>
                <Label>Price</Label>
                {fund.instrument.expenseRatio}%
              </Mb>
              <Mb>
                <Label>Type</Label>
                {fund.assetClass.label}
              </Mb>
            </div>
          </Halves>
        </Wrapper>
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
    padding: ${p => p.theme.spacing.medium} 0;
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

const Label = styled.div`
  font-weight: bold;
  display: block;
  color: ${p => p.theme.color.wcag};
`

const Mb = styled.div`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing.medium};
  }
`

const Halves = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > * {
    flex-basis: 50%;
    &:not(:last-child) {
      padding-right: ${p => p.theme.spacing.medium};
    }
  }
`

export default PortfolioExpand
