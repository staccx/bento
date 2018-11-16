import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Heading, Layout, LayoutItem } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"
import GoTo from "../GoTo/GoTo"
import BlockContent from "@sanity/block-content-to-react"
import serializer from "../../pages/blockContentSerializer"

const Story = ({
  heading,
  body,
  callToAction,
  callToActionUrl,
  image,
  isReverse
}) => {
  let isRich = false
  if (body && body._type && body._type === "richText") {
    isRich = true
    console.log(serializer.types, body)
  }
  let aligment = (image && image.alignment) || "auto"
  aligment = aligment !== "auto" ? aligment : isReverse ? "right" : "left"

  return (
    <Inner hasImg={image && image.asset} rev={isReverse}>
      <Layout variant={aligment}>
        <LayoutItem area={"content"}>
          <Layout>
            <ContentWrapper alignment={aligment}>
              {heading && <Heading level={3}>{heading}</Heading>}
              {!isRich && <Body>{body}</Body>}
              {isRich && (
                <BlockContent
                  blocks={body.bodyContent}
                  serializer={serializer}
                />
              )}
            </ContentWrapper>
            {callToAction &&
              callToActionUrl && (
                <div>
                  <GoTo to={callToActionUrl}>{callToAction}</GoTo>
                </div>
              )}
          </Layout>
        </LayoutItem>
        <LayoutItem area={"image"}>
          {image &&
            image.asset && (
              <ImageWrapper>
                <SanityImage image={image}>
                  {({ image: img }) => <Illustration src={img.url()} alt="" />}
                </SanityImage>
              </ImageWrapper>
            )}
        </LayoutItem>
      </Layout>
    </Inner>
  )
}

const Inner = styled.div``

const ContentWrapper = styled.div`
  ${({ alignment }) => {
    switch (alignment) {
      case "above":
      case "sideBySide":
        return css`
          max-width: 400px;
          margin: 0 auto;
        `
      default:
        return null
    }
  }};
`

const ImageWrapper = styled.div`
  text-align: center;
`

const Illustration = styled.img`
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
