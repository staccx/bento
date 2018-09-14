import React from "react"
import styled, { css } from "styled-components"
import { Heading, Layout, Wrapper } from "@staccx/base"
import { color, spacing, wrapper } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"
import FullWidth from "../FullWidth/FullWidth"

const ContactUs = ({ person, heading, image, imageCutOut }) => {
  return (
    <Container imageCutOut={imageCutOut || undefined}>
      <Wrapper>
        <Inner>
          <Body>
            <Layout paddingTop="grid" paddingBottom="grid">
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
      </Wrapper>
    </Container>
  )
}

const Container = styled(FullWidth)`
  background-color: ${color("blush")};

  @media only screen and (min-width: ${wrapper.medium}) {
    ${p =>
      p.imageCutOut &&
      css`
        margin-top: 132px;
      `};
  }
  &:last-child {
    margin-bottom: -${spacing("grid")};
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
  margin-left: ${spacing.large};
`

const ImgContainer = styled.div`
  @media only screen and (min-width: ${wrapper.medium}) {
    ${p =>
      p.imageCutOut &&
      css`
        align-self: flex-end;
      `};
  }
`

export default ContactUs
