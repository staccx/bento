import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Box, List, Heading, Text, NewBadge } from "@staccx/base"
import { ThemeComponent, color, spacing } from "@staccx/theme"
import CasesProgress from "./Cases.Progress"

const CasesList = ({ cases, compact }) => (
  <Box size="flush">
    <List variant="casesList">
      {cases.map((item, index) => (
        <li key={item.id}>
          <CaseLink to={`sales/${item.id}`}>
            <CaseContainer>
              <div>
                <Heading level={5}>{item.customer.name}</Heading>
                <Text>
                  {item.vehicle.type} {item.vehicle.make} {item.vehicle.model}
                </Text>
                <Text variant="subtle"> {item.id}</Text>
              </div>
              {!compact && (
                <div>
                  <CasesProgress
                    progress={item.status}
                    max={4}
                    inverted={index % 2}
                  />
                </div>
              )}

              <div>
                {item.messages && (
                  <NewBadge variant="casesList" number={item.messages.length} />
                )}
                <IconWrapper>
                  <ThemeComponent tagName="ArrowRight" />
                </IconWrapper>
              </div>
            </CaseContainer>
          </CaseLink>
        </li>
      ))}
    </List>
  </Box>
)

const CaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:last-child {
    display: flex;
    align-items: center;
  }
`

const IconWrapper = styled.div`
  height: 18px;
  width: 10px;
  margin-left: ${spacing.small};
  svg {
    display: block;
    fill: ${color.primary};
  }
`

const CaseLink = styled(Link)`
  display: block;
  padding: ${spacing.small} ${spacing.tiny};
  transition: background 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    background-color: ${color("subtleHover")};
  }
`

export default CasesList
