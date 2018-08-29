import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Heading, Layout } from "@staccx/base"
import { spacing, font, color } from "@staccx/theme"

const PageHead = ({ heading, lede, illustration, breadcrumb }) => {
  console.log(breadcrumb)
  return (
    <header>
      <Layout>
        <div>
          <BreadcrumbContainer>
            {breadcrumb.length &&
              breadcrumb.map(crumb => {
                return crumb.current ? (
                  <CurrentCrumb>{crumb.label}</CurrentCrumb>
                ) : (
                  <Breadcrumb to={crumb.url}>{crumb.label}</Breadcrumb>
                )
              })}
          </BreadcrumbContainer>
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
}

const BreadcrumbContainer = styled.div`
  display: block;
  color: ${color.secondary};
`

const Breadcrumb = styled(Link)`
  display: inline-block;
  color: ${color.secondary};
  text-decoration: none;

  &:not(:last-child) {
    &::after {
      content: " > ";
      color: ${color.gray};
      display: inline-block;
      margin: 0 ${spacing.tiny};
    }
  }
`

const CurrentCrumb = styled.span`
  color: ${color.gray};
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
