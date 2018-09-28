import React from "react"
// import styled from "styled-components"
import { Heading, Layout, RadioPill, RadioPillItem, Input } from "@staccx/base"
import householdPersons from "../data/householdPersons"

const Household = ({ numberPersons }) => (
  <Layout>
    <Heading level="1">Hvor mange er dere i husstanden?</Heading>
    <RadioPill onChange={numberPersons} group={"persons"} full>
      {householdPersons.map(listItem => (
        <RadioPillItem
          key={listItem.myUniqueId}
          value={listItem.value}
          id={listItem.myUniqueId}
        >
          {listItem.label}
        </RadioPillItem>
      ))}
    </RadioPill>
    <Input label="Alder" placeholder="0" />
  </Layout>
)

export default Household
