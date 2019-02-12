import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { theming, Button, Heading, LayoutItem } from "@staccx/base"
import { PieChart, Pie, Cell } from "recharts"
import TabPanel from "./Tabs"
import anime from "animejs"
import Chart from "./Chart"

const positiveMin = 0.9
const neutralMin = 0.75

const negativeColor = "#C0392B"
const neutralColor = "#F39C12"
const positiveColor = "#27AE60"
const arrowCol = "#313D3D"
const iconColor = "#fff"

const tick = {
  fill: "#fff",
  fontFamily: "Avenir",
  fontSize: "8pt"
}

const gaugeData = [
  { value: 75, color: negativeColor },
  { value: 15, color: neutralColor },
  { value: 10, color: positiveColor }
]

const Gauge = ({ data, children, header, country, indexName }) => {
  const [show, setShow] = useState(false)
  const [tab, setTab] = useState(0)
  const [status, setStatus] = useState(0.0)
  const [isAnimating, setIsAnimating] = useState(false)
  useEffect(() => {
    if (data.status && !isAnimating) {
      setIsAnimating(true)
      const values = {
        status
      }

      anime({
        targets: values,
        delay: Math.random() * 500,
        status: data.status * 100,
        round: 1,
        easing: "easeOutCubic",
        update: function() {
          setStatus(values.status * 0.01)
        }
      })
    }

    return () => null
  })

  const value = data.status || 0

  const auxText =
    value >= positiveMin
      ? "Positive"
      : value >= neutralMin
      ? "Neutral"
      : "Negative"
  const activeColor =
    auxText === "Positive"
      ? positiveColor
      : auxText === "Neutral"
      ? neutralColor
      : negativeColor

  const valueString = status.toFixed(2)

  return (
    <GaugeBox>
      <GaugeHeading level={2}>{header}</GaugeHeading>
      <Country level={3}>{country}</Country>
      <GaugeWrapper>
        <DisplayValue activeColor={activeColor}>{valueString}</DisplayValue>
        <DisplayAux>{auxText}</DisplayAux>
        <IndicatorWrapper>
          <PieChart width={232} height={232}>
            <Pie
              isAnimationActive={false}
              data={gaugeData}
              dataKey="value"
              startAngle={195}
              endAngle={-15}
              cx={"50%"}
              labelLine={false}
              innerRadius={90}
              outerRadius={115}
              fill={"#8884d8"}
              paddingAngle={1}
            >
              {gaugeData.map((entry, index) => (
                <Cell key={entry.value} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <IndicatorSvg height={232} width={232} viewBox={"0 0 232 232"}>
            <Indicator value={status}>
              <path
                id="arrow"
                d="M43.5556 135.411L7.76557 156.389L2.07155 135.139L43.5556 135.411Z"
                fill={arrowCol}
              />
            </Indicator>
          </IndicatorSvg>
        </IndicatorWrapper>
        <Info className="Info">
          <InfoButton className="InfoButton" onClick={() => setShow(!show)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              fill="#95A5A6"
            >
              <g id="info-icon">
                <g id="info-icon_2">
                  <path
                    id="Vector"
                    d="M16 0C7.1824 0 0 7.1824 0 16C0 24.8176 7.1824 32 16 32C24.8176 32 32 24.8176 32 16C32 7.1824 24.8176 0 16 0ZM16 3.2C23.0882 3.2 28.8 8.9118 28.8 16C28.8 23.0882 23.0882 28.8 16 28.8C8.9118 28.8 3.2 23.0882 3.2 16C3.2 8.9118 8.9118 3.2 16 3.2ZM14.4 8V11.2H17.6V8H14.4ZM14.4 14.4V24H17.6V14.4H14.4Z"
                  />
                </g>
              </g>
            </svg>
          </InfoButton>
          {show && (
            <InfoOverlay className="InfoOverlay" children={children}>
              {children}
            </InfoOverlay>
          )}
        </Info>
      </GaugeWrapper>
      <TabList>
        <Tab onClick={() => setTab(0)} isActive={tab === 0}>
          <TabIcon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={iconColor}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1C1.90694 1 1 1.90694 1 3V17C1 18.0931 1.90694 19 3 19H17C18.0931 19 19 18.0931 19 17V3C19 1.90694 18.0931 1 17 1H3ZM3 3H17V17H3V3ZM10 4.27344L8.45508 7.92383L4.5 8.26172L7.5 10.8574L6.59961 14.7266L10 12.6758L13.4004 14.7266L12.502 10.8516L15.5 8.25391L11.5449 7.91602L10 4.27344Z" />
            </svg>
          </TabIcon>
          <TabText isActive={tab === 0}>Macro score</TabText>
        </Tab>
        <Tab onClick={() => setTab(1)} isActive={tab === 1}>
          <TabIcon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 1V3H6V1H4ZM14 1V3H16V1H14ZM18.293 2.29297L15 5.58594L12 2.58594L8 6.58594L5 3.58594L1.29297 7.29297L2.70703 8.70703L5 6.41406L8 9.41406L12 5.41406L15 8.41406L19.707 3.70703L18.293 2.29297ZM4 9V11H6V9H4ZM14 9V11H16V9H14ZM4 13V15H6V13H4ZM14 13V15H16V13H14ZM1 17V19H19V17H1Z" />
            </svg>
          </TabIcon>
          <TabText isActive={tab === 1}>{indexName}</TabText>
        </Tab>
        <Tab onClick={() => setTab(2)} isActive={tab === 2}>
          <TabIcon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0C7.24609 0 4.74609 1.12891 2.9375 2.9375L1 1V6H6L4.34375 4.34375C5.57031 3.11719 7.19141 2.28906 9 2.0625V3H11V2.0625C14.6094 2.51562 17.4844 5.39062 17.9375 9H17V11H17.9375C17.4844 14.6094 14.6094 17.4844 11 17.9375V17H9V17.9375C5.39062 17.4844 2.51562 14.6094 2.0625 11H3V9H0.0625C0.03125 9.32812 0 9.66016 0 10C0 15.5156 4.48438 20 10 20C15.5156 20 20 15.5156 20 10C20 4.48438 15.5156 0 10 0Z" />
            </svg>
          </TabIcon>
          <TabText isActive={tab === 2}>Back test</TabText>
        </Tab>
      </TabList>
      <TabPanel current={tab}>
        <StyledLayoutItem>
          <Chart
            data={data.statusChartData}
            tick={tick}
            stroke={positiveColor}
          />
        </StyledLayoutItem>
        <StyledLayoutItem>
          <Chart
            data={data.indexChartData}
            tick={tick}
            stroke={positiveColor}
          />
        </StyledLayoutItem>
        <StyledLayoutItem>
          <Chart
            data={data.backtestChartData}
            tick={tick}
            stroke={positiveColor}
          />
        </StyledLayoutItem>
      </TabPanel>
    </GaugeBox>
  )
}

const GaugeBox = styled.div`
  width: calc(232px + ${theming.spacing.large} * 2);
  position: relative;
`

const GaugeWrapper = styled.div`
  width: 232px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

const GaugeHeading = styled(Heading)`
  font-family: ${theming.fontFamily.heading};
  font-size: ${theming.font.h3};
  font-weight: ${theming.fontWeight.normal};
  text-align: center;
  margin-bottom: 0;
`

const Country = styled(Heading)`
  font-family: ${theming.fontFamily.heading};
  font-size: ${theming.font.h3};
  font-weight: ${theming.fontWeight.bold};
  text-align: center;
  margin-top: 0;
`

const DisplayValue = styled.div`
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
  font-family: ${theming.fontFamily.heading};
  font-weight: ${theming.fontWeight.bold};
  font-size: 42px;
  color: ${p => p.activeColor};
`
const DisplayAux = styled.div`
  position: absolute;
  top: 53%;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family: ${theming.fontFamily.body};
  font-weight: ${theming.fontWeight.bold};
  font-size: 18px;
  color: #000;
`
const IndicatorWrapper = styled.div`
  position: relative;
`

const IndicatorSvg = styled.svg`
  position: absolute;
  top: 0;
`

const Indicator = styled.g`
  transform-origin: 116.5px 116.5px;
  transform: rotate(${p => p.value * 210}deg);
`

const Info = styled.div`
  width: 100%;
  position: absolute;
  top: 68%;
  font-family: ${theming.fontFamily.body};
  font-size: ${theming.font.base};
  text-align: center;
  z-index: 999;
`

const InfoButton = styled(Button)`
  background-color: transparent;
  display: inline-block;
  top: 68%;
  width: auto;
  min-height: 0;
  text-align: center;
  line-height: 0;
  padding: 6px;
  svg {
    fill: ${theming.color.black};
    opacity: 0.5;
  }

  :hover,
  :focus {
    background-color: transparent;
    svg {
      opacity: 0.75;
    }
  }
`

const InfoOverlay = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  background-color: #333;
  text-align: initial;
  color: #fff;
  padding: ${theming.spacing.medium};
  position: absolute;
  width: calc(100% + 40px);
  max-width: 100vw;
  top: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  &::before {
    content: "";
    display: block;
    background-color: inherit;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 0;
    transform-origin: top left;
    transform: translateY(-70%) rotate(45deg);
  }
`

const TabList = styled.div`
  display: flex;
  position: relative;
  margin-bottom: -${theming.spacing.tiny};
`

const Tab = styled(Button)`
  border-radius: 0;
  max-height: none;
  flex-grow: 1;
  background-color: ${({ isActive }) =>
    isActive ? theming.color.primary : "transparent"};
  color: ${({ isActive }) =>
    isActive ? theming.color.white : theming.color.primary};
  line-height: 1;
  font-size: ${theming.font.tiny};

  :disabled {
    cursor: default;
    color: ${theming.color.black};
    background-color: ${theming.color.disabled};
    > * {
      opacity: 0.5;
    }
  }

  /***
   * Override styling that creates padding right on hover + focus:
   */
  &,
  :disabled:hover,
  :disabled:focus {
    padding: ${theming.spacing.medium} ${theming.spacing.small};
  }
`

const TabIcon = styled.div`
  margin-bottom: ${theming.spacing.small};
  svg {
    fill: currentColor;
  }
`

const TabText = styled.div`
  color: ${({ isActive }) => (isActive ? "currentColor" : theming.color.black)};
`

const StyledLayoutItem = styled(LayoutItem)`
  background-color: #1b252a;
  color: white;
  padding-top: calc(${theming.spacing.small} + ${theming.spacing.tiny});
`

export default Gauge
