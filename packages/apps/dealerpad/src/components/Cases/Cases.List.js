import React from "react"
import { Link } from "react-router-dom"
import { Box, List, Heading, Text, NewBadge } from "@staccx/base"
import CasesProgress from "./Cases.Progress"

const CasesList = ({ cases, compact }) => (
  <div>
    <Heading level={4}>Mine siste saker</Heading>
    <Box size="flush">
      <List variant="casesList">
        {cases.map((item, index) => (
          <li key={item.id}>
            <div>
              <Link to={`cases/${item.id}`}>
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
                    <NewBadge
                      variant="casesList"
                      number={item.messages.length}
                    />
                  )}
                </div>
              </Link>
            </div>
          </li>
        ))}
      </List>
    </Box>
  </div>
)

export default CasesList
