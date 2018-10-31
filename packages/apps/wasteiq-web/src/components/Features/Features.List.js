import React from "react"
import styled from "styled-components"
import { List, Heading, Paragraph, Layout } from "@staccx/base"

const FeaturesList = () => {
  return (
    <List variant={"columns"}>
      <li>
        <Layout rowGap={"tiny"}>
          <Heading level={4}>A ledger for waste transactions</Heading>
          <Paragraph>
            Who throws what using what infrastructure? WasteIQ gathers waste
            transactions in a structured cloud database.{" "}
          </Paragraph>
        </Layout>
      </li>
      <li>
        <Layout rowGap={"tiny"}>
          <Heading level={4}>A ledger for waste transactions</Heading>
          <Paragraph>
            Who throws what using what infrastructure? WasteIQ gathers waste
            transactions in a structured cloud database.{" "}
          </Paragraph>
        </Layout>
      </li>
      <li>
        <Layout rowGap={"tiny"}>
          <Heading level={4}>A ledger for waste transactions</Heading>
          <Paragraph>
            Who throws what using what infrastructure? WasteIQ gathers waste
            transactions in a structured cloud database.{" "}
          </Paragraph>
        </Layout>
      </li>
      <li>
        <Layout rowGap={"tiny"}>
          <Heading level={4}>A ledger for waste transactions</Heading>
          <Paragraph>
            Who throws what using what infrastructure? WasteIQ gathers waste
            transactions in a structured cloud database.{" "}
          </Paragraph>
        </Layout>
      </li>
    </List>
  )
}

export default FeaturesList
