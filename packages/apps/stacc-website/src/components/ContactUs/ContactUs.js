import React from "react"
import styled, { css } from "styled-components"
import { Heading, Layout, Wrapper } from "@staccx/base"
import { color, spacing, wrapper } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"
import FullWidth from "../FullWidth/FullWidth"

const ContactUs = ({ person, heading, image, imageCutOut }) => {
  return (
    <Container imageCutOut={imageCutOut || undefined}>
      <StyledWrapper>
        <Inner>
          <Body>
            <Layout>
              <Heading level={2}>{heading}</Heading>
              <div>
                {person.name} <br />
                {person.phone} <br />
                {person.email}
              </div>
            </Layout>
          </Body>
          {image && (
            <ImgContainer imageCutOut={imageCutOut || undefined}>
              <SanityImage image={image}>
                {({ image }) => {
                  if (image.url()) {
                    return (
                      <Image
                        src={image.url()}
                        alt={person.name}
                        imageCutOut={imageCutOut || undefined}
                      />
                    )
                  }
                }}
              </SanityImage>
            </ImgContainer>
          )}
        </Inner>
      </StyledWrapper>
    </Container>
  )
}

const StyledWrapper = styled(Wrapper)`
  padding-left: ${spacing.medium} !important;
  padding-right: ${spacing.medium} !important;
`

const Container = styled(FullWidth)`
  background-color: ${color("blush")};
  padding: ${p => (!p.imageCutOut ? spacing("grid")(p) : 0)} 0;
  color: ${color("textDark")};

  @media only screen and (min-width: ${wrapper.medium}) {
    ${p =>
      p.imageCutOut &&
      css`
        margin-top: 132px;
      `};
  }
  &:last-child {
    margin-bottom: -${spacing("gridLarge")};
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${wrapper.medium}) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
  }
`

const Image = styled.img`
  display: block;

  @media only screen and (min-width: ${wrapper.medium}) {
    ${p =>
      p.imageCutOut &&
      css`
        margin-top: -132px;
      `};
  }
`

const Body = styled.div`
  @media only screen and (max-width: ${wrapper.medium}) {
    margin-bottom: ${spacing.large};
  }
`

const ImgContainer = styled.div`
  @media only screen and (min-width: ${wrapper.medium}) {
    ${p =>
      p.imageCutOut &&
      css`
        align-self: flex-end;
      `};
    margin-right: ${spacing.large};
  }

  @media only screen and (max-width: ${wrapper.large}) {
    max-width: 50%;
  }
`

export default ContactUs
