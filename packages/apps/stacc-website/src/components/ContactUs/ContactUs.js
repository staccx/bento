import React from "react"
import styled, { css } from "styled-components"
import { Heading, Layout, Wrapper } from "@staccx/base"
import { color, spacing, wrapper } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"
import FullWidth from "../FullWidth/FullWidth"

const ContactUs = ({
  person,
  heading,
  image,
  imageCutOut,
  emailSubject = null
}) => {
  return (
    <Container imageCutOut={imageCutOut || undefined}>
      <StyledWrapper>
        <Inner>
          <Body>
            <Layout>
              <Heading level={2}>{heading}</Heading>
              <div>
                <Layout rowGap="small">
                  <Heading level={3}>{person.name}</Heading>
                  <div>
                    <a href={`tel:${person.phone}`}>{person.phone}</a>
                    <a
                      href={`mailto:${person.email}${
                        emailSubject ? `?subject=${emailSubject}` : ""
                      }`}
                    >
                      {person.email}
                    </a>
                  </div>
                </Layout>
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
  padding-left: 8.5vw !important;
  padding-right: 8.5vw !important;
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
