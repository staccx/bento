import React from "react"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"
import { Layout, RadioPill, RadioPillItem, Input, Box } from "@staccx/base"
import OpenApiConsumer from "../OpenApiConsumer"

const langs = [
  {
    id: "js",
    value: "nodeRequest",
    label: "Node",
    defaultChecked: true
  },
  {
    id: "java",
    value: "okHTTP",
    label: "Java",
    defaultChecked: false
  },
  {
    id: "net",
    value: "restSharp",
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
            id="headersearch"
          />
        </Box>
        <div>
          <OpenApiConsumer>
            {({ preferredLanguage, setPreferredLanguage }) =>
              preferredLanguage ? (
                <RadioPill
                  onChange={e => setPreferredLanguage(e.target.value)}
                  group={"lang"}
                  variant="documentationHeaderLang"
                >
                  {langs.map(listItem => (
                    <RadioPillItem
                      key={listItem.id}
                      value={listItem.value}
                      defaultChecked={listItem.value === preferredLanguage}
                      id={listItem.id}
                    >
                      {listItem.label}
                    </RadioPillItem>
                  ))}
                </RadioPill>
              ) : null
            }
          </OpenApiConsumer>
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
