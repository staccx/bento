import React from "react"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"
import { Layout, RadioPill, RadioPillItem, Input, Box } from "@staccx/base"

const langs = [
  {
    id: "js",
    value: "js",
    label: "Node",
    defaultChecked: true
  },
  {
    id: "java",
    value: "java",
    label: "Java",
    defaultChecked: false
  },
  {
    id: "net",
    value: "net",
    label: ".NET",
    defaultChecked: false
  }
]

const Header = ({ children, classname }) => (
  <Layout variant="documentationApiReferences">
    <HeaderComp className={classname}>
      <Layout variant="documentationHeader" light>
        <Box variant="documentationHeaderSearch" size="flush">
          <Input
            type="search"
            placeholder="Search our documentation…"
            variant="documentationHeaderSearch"
          />
        </Box>
        <div>
          <RadioPill
            onChange={e => console.log(e.target.value)}
            group={"lang"}
            variant="documentationHeaderLang"
          >
            {langs.map(listItem => (
              <RadioPillItem
                key={listItem.id}
                value={listItem.value}
                defaultChecked={listItem.defaultChecked}
                id={listItem.id}
              >
                {listItem.label}
              </RadioPillItem>
            ))}
          </RadioPill>
        </div>
      </Layout>
    </HeaderComp>
  </Layout>
)

const HeaderComp = styled.header`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  min-height: ${spacing("largePlus")};
  border-bottom: 1px solid ${color.line};
  width: 100%;
`

export default Header
