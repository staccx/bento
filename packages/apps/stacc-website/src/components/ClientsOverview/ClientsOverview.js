import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import ClientsOverviewItem from "./ClientsOverview.Item"

const ClientsOverview = ({ items }) => (
  <Container>
    {items.map(item => (
      <ClientsOverviewItem
        heading={item.name}
        key={item.name}
        body={item.body}
        callToAction={item.callToAction}
        callToActionUrl={item.callToActionUrl}
        image={item.image}
      />
    ))}
  </Container>
)

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: ${spacing.large};
  grid-column-gap: ${spacing.large};
`

export default ClientsOverview
