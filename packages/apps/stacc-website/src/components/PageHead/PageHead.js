import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Heading, Layout } from "@staccx/base"
import { spacing, font, color } from "@staccx/theme"

const PageHead = ({ heading, lede, illustration }) => (
  <header>
    <Layout>
      <div>
        <Breadcrumb to="/services">Services</Breadcrumb>
        <Heading level={1}>{heading}</Heading>
      </div>
      <Body>
        <Lede>{lede}</Lede>
        <div>
          <Illustration src={illustration} alt="" />
        </div>
      </Body>
    </Layout>
  </header>
)

const Breadcrumb = styled(Link)`
  color: ${color.secondary};
  text-decoration: none;
`

const Body = styled.div`
  display: flex;
  align-items: center;
`

const Lede = styled.p`
  font-size: ${font.h3};
  font-weight: 300;
  line-height: 1.8;
  margin-right: ${spacing.large};
`

const Illustration = styled.img`
  max-width: 320px;
`

export default PageHead
