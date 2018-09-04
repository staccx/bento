import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import { spacing, font } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"

const SectionHead = ({ heading, headingLevel, lede, illustration }) => {
  return (
    <header>
      <Layout>
        <Body>
          <div>
            <Heading level={headingLevel}>{heading}</Heading>
            <Lede>{lede}</Lede>
          </div>

          <div>
            <SanityImage image={illustration}>
              {({ image }) => <Illustration src={image.url()} alt="" />}
            </SanityImage>
          </div>
        </Body>
      </Layout>
    </header>
  )
}

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
