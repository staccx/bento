import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { color, spacing } from "@staccx/theme"
import { Heading, Layout } from "@staccx/base"

const ClientsOverviewItem = ({
  name,
  description,
  cases,
  website,
  websiteName,
  logo
}) => (
  <article>
    <Layout rowGap="medium">
      {logo && (
        <ImageContainer>
          <img src={logo} alt={name} />
        </ImageContainer>
      )}
      <Layout rowGap="tiny">
        <Heading level={3}>{name}</Heading>
        <p>{description}</p>
        <div>
          {cases.length > 0 &&
            cases.map(clientCase => (
              <ClientLink to={clientCase.url} key={clientCase.key}>
                {clientCase.name}
              </ClientLink>
            ))}
          {!cases.length &&
            website &&
            websiteName && <ClientLink to={website}>{websiteName}</ClientLink>}
        </div>
      </Layout>
    </Layout>
  </article>
)

const ImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color("g4")};
  padding: ${spacing.medium} ${spacing.large};
  height: 240px;
`

const ClientLink = styled(Link)`
  display: block;
  color: ${color.primary};
  text-decoration: none;
  font-weight: 500;
`

export default ClientsOverviewItem
