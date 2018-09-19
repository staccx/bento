import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import { spacing, font, fontFamily, wrapper } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"

const SectionHead = ({ heading, headingLevel, lede, illustration }) => {
  return (
    <header>
      <Layout>
        <Body>
          <div>
            <Layout>
              <Heading level={headingLevel}>{heading}</Heading>
              <Lede>{lede}</Lede>
            </Layout>
          </div>

          <div>
            {illustration && (
              <SanityImage image={illustration}>
                {({ image }) => <Illustration src={image.url()} alt="" />}
              </SanityImage>
            )}
          </div>
        </Body>
      </Layout>
    </header>
  )
}

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: ${wrapper.medium}) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

const Lede = styled.p`
  font-family: ${fontFamily.heading};
  font-weight: 300;
  line-height: 1.8;

  @media only screen and (min-width: ${wrapper.medium}) {
    font-size: ${font.h3};
    margin-right: ${spacing.large};
  }
`

const Illustration = styled.img`
  max-width: 320px;
  display: block;
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
