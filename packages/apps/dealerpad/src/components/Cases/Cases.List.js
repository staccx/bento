import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Box, List, Heading, Text, NewBadge, Loading } from "@staccx/base"
import { ThemeComponent, color, spacing } from "@staccx/theme"
import CasesProgress from "./Cases.Progress"
import caseStore from "../../data/store/caseStore"
import { observer } from "mobx-react"

const CasesList = observer(({ compact }) => {
  if (caseStore.isLoading) {
    console.log("still loading")
    return <Loading />
  }

  return (
    <Box size="flush">
      <List variant="casesList">
        {caseStore.cases.map((item, index) => (
          <li key={item.id}>
            <Link to={`sales/${item.id}`}>
              <CaseContainer>
                <div>
                  <Heading
                    level={3}
                    variant="caselist"
                    attention={
                      item.messages || (item.messages && item.messages.length)
                    }
                  >
                    {item.customers[0].firstName} {item.customers[0].lastName}
                  </Heading>
                  <Text variant="legalese">
                    {item.vehicle.type} {item.vehicle.make} {item.vehicle.model}
                    <Text variant="subtle"> {item.applicationId}</Text>
                  </Text>
                </div>
                {item.messages &&
                  !compact && (
                    <NewBadge
                      variant="casesList"
                      number={item.messages.length}
                    />
                  )}

                <div>
                  {!compact && caseStore.isLoading ? (
                    <Loading />
                  ) : (
                    <SpacingLeft>
                      <CasesProgress
                        progress={item.progress}
                        max={4}
                        inverted={index % 2}
                      />
                    </SpacingLeft>
                  )}
                  {item.messages &&
                    compact && (
                      <SpacingLeft>
                        <NewBadge
                          variant="casesList"
                          number={item.messages.length}
                        />
                      </SpacingLeft>
                    )}
                  <IconWrapper>
                    <ThemeComponent tagName="ArrowRight" />
                  </IconWrapper>
                </div>
              </CaseContainer>
            </Link>
          </li>
        ))}
      </List>
    </Box>
  )
})

const CaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    flex-grow: 1;
  }

  > div:last-child {
    display: flex;
    align-items: center;
  }
`

const SpacingLeft = styled.div`
  margin-left: ${spacing.small};
`

export const IconWrapper = styled.div`
  margin-left: ${spacing.small};

  svg {
    display: block;
    fill: ${color.primary};
    width: 10px;
  }
`

export default CasesList
