import React from "react"
import { Link } from "react-router-dom"
import { Box, List, Heading, Text, Fraction, NewBadge } from "@staccx/base"

const CasesList = ({ cases, small }) => (
  <div>
    <Heading level={4}>Mine siste saker</Heading>
    <Box size="flush">
      <List variant="casesList" small={small}>
        {cases.map(item => (
          <li key={item.id}>
            <div>
              <Link to={`cases/${item.id}`}>
                <Heading level={5}>{item.customer.name}</Heading>

                <Text>
                  {item.vehicle.type} {item.vehicle.make} {item.vehicle.model}
                </Text>
                <Text variant="subtle"> {item.id}</Text>
                <div>
                  {item.messages && <NewBadge number={item.messages.length} />}
                </div>
                <div>
                  <Fraction value={item.status} max={4} />
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
