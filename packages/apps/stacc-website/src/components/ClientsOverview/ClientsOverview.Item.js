import React from "react"
import styled from "styled-components"
import { Heading, Layout, theming } from "@staccx/base"

const ClientsOverviewItem = ({
  heading,
  body,
  callToActionUrl,
  callToAction,
  image
}) => (
  <div>
    <Layout rowGap="small">
      <ImageContainer>
        {image && <img src={image} alt={heading} />}
      </ImageContainer>
      <div>
        <Heading level={3}>{heading}</Heading>
        <p>{body}</p>
      </div>
      <a href={callToActionUrl}>{callToAction}</a>
    </Layout>
  </div>
)

const ImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theming.color("g4")};
  padding: ${theming.spacing.medium} ${theming.spacing.large};
  height: 240px;
`

export default ClientsOverviewItem
