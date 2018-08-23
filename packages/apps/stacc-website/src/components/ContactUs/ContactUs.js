import React from "react"
import styled from "styled-components"
import { Heading, Button, Layout, Wrapper } from "@staccx/base"
import { color, spacing } from "@staccx/theme"

const ContactUs = ({ person }) => (
  <Container>
    <Wrapper>
      <Inner>
        <Body>
          <Layout>
            <Heading level={2}>Need a new core banking system?</Heading>
            <div>
              {person.name} <br />
              {person.phone} <br />
              {person.email}
            </div>
          </Layout>
        </Body>
        <ImgContainer>
          <Image src={person.img} alt="" />{" "}
        </ImgContainer>
      </Inner>
    </Wrapper>
  </Container>
)

const Container = styled.div`
  background-color: ${color("blush")};
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
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
