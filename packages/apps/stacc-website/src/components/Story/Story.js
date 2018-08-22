import React from "react"
import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import { spacing } from "@staccx/theme"
import GoTo from "../GoTo/GoTo"

const Story = ({ heading, body, callToAction, illustration, isEven }) => (
  <Container>
    <Inner rev={isEven}>
      <div>
        <Layout>
          <div>
            <Heading level={3}>{heading}</Heading>
            <Body>{body}</Body>
          </div>
          {callToAction && (
            <div>
              <GoTo to="#nowhere">Explore analytics</GoTo>
            </div>
          )}
        </Layout>
      </div>
      <div>
        <Illustration src={illustration} alt="" />
      </div>
    </Inner>
  </Container>
)

const Container = styled.div`
  margin-bottom: ${spacing("grid")};
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  ${p => p.rev && `flex-direction: row-reverse`};
  justify-content: space-between;

  > div:first-child {
    flex-basis: calc(50%);
  }

  > div:last-child {
    flex-basis: calc(50% - 48px);
    text-align: center;
  }
`

const Illustration = styled.img`
  max-width: 320px;
`

const Body = styled.p`
  line-height: 1.8;
`

export default Story
