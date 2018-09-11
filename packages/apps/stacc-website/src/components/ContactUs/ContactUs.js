import React from "react"
import styled from "styled-components"
import { Heading, Layout, Wrapper } from "@staccx/base"
import { color, spacing } from "@staccx/theme"
import { SanityImage } from "@staccx/sanity"
import FullWidth from "../FullWidth/FullWidth"

const ContactUs = ({ person, heading, image }) => {
  return (
    <Container>
      <Wrapper>
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
            <ImgContainer>
              <SanityImage image={image}>
                {({ image }) => <Image src={image.url()} alt={person.name} />}
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
  margin-top: 132px;

  &:last-child {
    margin-bottom: -${spacing("grid")};
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
`

const Image = styled.img`
  margin-top: -132px;
  display: block;
`

const Body = styled.div`
  margin-left: ${spacing.large};
`

const ImgContainer = styled.div`
  align-self: flex-end;
`

export default ContactUs
