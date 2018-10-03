import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { List } from "@staccx/base"

const DetailsList = ({ car }) => {
  const { range, numberOfSeats, trunkCapacityInLiters } = car
  return (
    <div>
      <List variant="details">
        <ListItem>
          <span>Rekkevidde</span> <span>{range}</span>
        </ListItem>
        <ListItem>
          <span>Antall seter</span> <span>{numberOfSeats}</span>
        </ListItem>
        <ListItem>
          <span>Bagasjerom</span> <span>{trunkCapacityInLiters}</span>
        </ListItem>
      </List>
    </div>
  )
}

const ListItem = styled.li`
  padding: ${spacing.small} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default DetailsList
