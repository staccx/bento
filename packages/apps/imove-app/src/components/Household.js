import React from "react"
// import styled from "styled-components"
import { Heading, Layout, RadioPill, RadioPillItem, Input } from "@staccx/base"
import householdPersons from "../data/householdPersons"
import { TranslatedText } from "@staccx/i18n"

const Household = ({ numberPersons }) => (
  <Layout>
    <Heading level="1">
      <TranslatedText i18nKey="heading-onboarding-husstand" />
    </Heading>
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
    <Input labelWidth="48" label="Alder" placeholder="0" />
  </Layout>
)

export default Household
