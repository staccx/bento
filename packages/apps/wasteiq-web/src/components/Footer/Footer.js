import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Layout, LayoutItem, Box, ThemeComponent } from "@staccx/base"

const Footer = () => {
  return (
    <Box variant={"footer"} as={"footer"}>
      <Layout
        rowGap={"small"}
        paddingTop={"gridSmall"}
        paddingBottom={"gridSmall"}
        variant={"page"}
      >
        <LayoutItem area={"main"}>
          <LogoLink to={"/"}>
            <ThemeComponent tagName={"Logo"} inverted />
          </LogoLink>
        </LayoutItem>
      </Layout>
    </Box>
  )
}

const LogoLink = styled(Link)`
  display: block;
  max-width: 168px;
`

export default Footer
