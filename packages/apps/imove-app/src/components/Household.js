import React from "react"
// import styled from "styled-components"
import {
  Heading,
  Layout,
  RadioPill,
  RadioPillItem,
  Input,
  State
} from "@staccx/base"
import householdPersons from "../data/householdPersons"
import { TranslatedText } from "@staccx/i18n"

const Household = () => (
  <State>
    {({ change, people = 1 }) => {
      return (
        <Layout>
          <Heading level="1">
            <TranslatedText i18nKey="heading-onboarding-husstand" />
          </Heading>
          <RadioPill
            onChange={e => change({ people: parseInt(e.target.value, 10) })}
            group={"persons"}
            full
          >
            {householdPersons.map(listItem => (
              <RadioPillItem
                key={listItem.myUniqueId}
                value={listItem.value}
                id={listItem.myUniqueId}
                defaultChecked={listItem.value === people}
              >
                {listItem.label}
              </RadioPillItem>
            ))}
          </RadioPill>
          {[...Array(people)].map((person, index) => (
            <Input
              id={`person${index}`}
              labelWidth="48"
              label="Alder"
              placeholder="0"
              key={index}
            />
          ))}
        </Layout>
      )
    }}
  </State>
)

export default Household
