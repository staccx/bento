import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Heading, Layout, theming } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"

const SectionHead = ({ heading, headingLevel, lede, illustration }) => {
  return (
    <header>
      <Layout>
        <Body>
          <div>
            <Layout rowGap="small">
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

  @media only screen and (max-width: ${theming.wrapper.medium}) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

const Lede = styled.p`
  font-family: ${theming.fontFamily.heading};
  font-weight: 300;
  line-height: 1.8;
  color: ${theming.color("textDark")};
  ${theming.fontSmoothing};

  @media only screen and (min-width: ${theming.wrapper.medium}) {
    font-size: ${theming.font.h3};
    margin-right: ${theming.spacing.large};
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
  illustration: PropTypes.object
}

export default SectionHead
