import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
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
    <Inner rev={isReverse}>
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
      {illustration && (
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
  ${p => p.rev && `flex-direction: row-reverse`};
  justify-content: space-between;

  > div:first-child {
    flex-basis: calc(50%);
  }

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
`

const Body = styled.p`
  line-height: 1.8;
`

Story.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  callToAction: PropTypes.string,
  callToActionUrl: PropTypes.string,
  illustration: PropTypes.string,
  isReverse: PropTypes.bool
}

export default Story
