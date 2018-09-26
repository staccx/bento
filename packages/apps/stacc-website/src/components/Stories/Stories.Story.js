import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Heading, Layout } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"
import GoTo from "../GoTo/GoTo"

const Story = ({
  heading,
  body,
  callToAction,
  callToActionUrl,
  illustration,
  isReverse
}) => (
  <Container>
    <Inner hasImg={illustration && illustration.asset} rev={isReverse}>
      <div>
        <Layout>
          <div>
            {heading && <Heading level={3}>{heading}</Heading>}
            {body && <Body>{body}</Body>}
          </div>
          {callToAction &&
            callToActionUrl && (
              <div>
                <GoTo to={callToActionUrl}>{callToAction}</GoTo>
              </div>
            )}
        </Layout>
      </div>
      {illustration &&
        illustration.asset && (
          <div>
            <SanityImage image={illustration}>
              {({ image }) => <Illustration src={image.url()} alt="" />}
            </SanityImage>
          </div>
        )}
    </Inner>
  </Container>
)

const Container = styled.div``

const Inner = styled.div`
  display: flex;
  align-items: center;
  ${p => p.rev && p.hasImg && `flex-direction: row-reverse`};
  justify-content: space-between;

  ${p =>
    p.hasImg
      ? css`
          > div:first-child {
            flex-basis: calc(50%);
          }
        `
      : css`
          text-align: left;
          justify-content: flex-start;
          > div:first-child {
            flex-basis: calc(56%);
          }
        `};

  > div:last-child:not(:first-child) {
    flex-basis: calc(50% - 48px);
    text-align: center;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
`

const Illustration = styled.img`
  max-width: 320px;
  width: 100%;
`

const Body = styled.p`
  line-height: 1.8;
`

Story.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  callToAction: PropTypes.string,
  callToActionUrl: PropTypes.string,
  illustration: PropTypes.object,
  isReverse: PropTypes.bool
}

export default Story
