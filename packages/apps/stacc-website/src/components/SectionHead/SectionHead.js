import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Heading, Layout } from "@staccx/base"
import { spacing, font, color } from "@staccx/theme"

const SectionHead = ({
  heading,
  headingLevel,
  lede,
  illustration,
  breadcrumb
}) => {
  return (
    <header>
      <Layout>
        <Body>
          <div>
            <BreadcrumbContainer>
              {breadcrumb &&
                breadcrumb.length &&
                breadcrumb.map(crumb => {
                  return crumb.current ? (
                    <CurrentCrumb>{crumb.label}</CurrentCrumb>
                  ) : (
                    <Breadcrumb to={crumb.url}>{crumb.label}</Breadcrumb>
                  )
                })}
            </BreadcrumbContainer>
            <Heading level={headingLevel}>{heading}</Heading>
            <Lede>{lede}</Lede>
          </div>

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

SectionHead.defaultProps = {
  heading: null,
  headingLevel: 1,
  lede: null,
  breadcrumb: null,
  callToActionUrl: null,
  illustration: null
}

SectionHead.propTypes = {
  heading: PropTypes.string,
  headingLevel: PropTypes.number,
  lede: PropTypes.string,
  breadcrumb: PropTypes.array,
  callToActionUrl: PropTypes.string,
  illustration: PropTypes.string
}

export default SectionHead
