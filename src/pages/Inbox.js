import React from "react"
import styled from "styled-components"
import { Modal, Layout, LayoutItem, ExpandListItem, List } from "@staccx/base"
import { color, spacing, font, fontWeight } from "@staccx/theme"
import inboxData from "./Inbox.data"

const Deposit = () => {
  console.log(inboxData)
  return (
    <Modal variant="small" isOpen>
      <Layout grid="rows">
        <LayoutItem>
          <Heading>Innboks</Heading>
        </LayoutItem>
        <LayoutItem>
          <List>
            {inboxData.map(element => (
              <ExpandListItem title={element.label} key={element._id}>
                {element.content}
              </ExpandListItem>
            ))}
          </List>
        </LayoutItem>
      </Layout>
    </Modal>
  )
}

const Heading = styled.h1`
  font-size: ${font.h4};
  text-align: center;
  font-weight: ${fontWeight.bold};
  color: ${color.text};
  margin-bottom: ${spacing.tiny};
`

export default Deposit
