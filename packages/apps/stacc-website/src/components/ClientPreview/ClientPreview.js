import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { color, spacing } from "@staccx/theme"
import { Heading, Layout } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"

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
          <SanityImage image={logo}>
            {({ image }) => <img src={image.height(240).url()} alt={name} />}
          </SanityImage>
        </ImageContainer>
      )}
      <Layout rowGap="tiny">
        <Heading level={3}>{name}</Heading>
        <p>{description}</p>
        <div>
          {cases.length > 0 &&
            cases.filter(c => c.path).map(clientCase => (
              <ClientLink to={clientCase.path.current} key={clientCase._key}>
                {clientCase.name}
              </ClientLink>
            ))}
          {!cases.length &&
            website &&
            websiteName && <ClientA href={website}>{websiteName}</ClientA>}
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

ClientsOverviewItem.defaultProps = {
  name: "",
  description: "",
  cases: [],
  website: "",
  websiteName: "",
  logo: null
}

ClientsOverviewItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  cases: PropTypes.array,
  website: PropTypes.string,
  websiteName: PropTypes.string,
  logo: PropTypes.object
}

const ClientA = ClientLink.withComponent("a")

export default ClientsOverviewItem
