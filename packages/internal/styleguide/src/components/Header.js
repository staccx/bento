import React from "react"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"
import { Layout, Input, Box } from "@staccx/base"

const Header = ({ children, classname }) => (
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
      {children}
    </Layout>
  </HeaderComp>
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
