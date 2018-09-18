import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { color, font, spacing, wrapper } from "@staccx/theme"
import { Heading, Layout, Wrapper, ItemGroup } from "@staccx/base"

const Trinity = ({ items, heading }) => (
  <Wrapper>
    <Layout rowGap="large">
      {heading && <TrinityHeading level={2}>{heading}</TrinityHeading>}
      <Container>
        {items.map(tri => (
          <Item key={tri._key}>
            <Heading level={3}>{tri.heading}</Heading>
            <p>{tri.body}</p>
          </Item>
        ))}
      </Container>
    </Layout>
  </Wrapper>
)

const TrinityHeading = styled(Heading)`
  color: ${color.primary};
  text-align: center;
`

const Container = styled(ItemGroup)`
  position: relative;
  > div {
    justify-content: space-between;
  }
`

const Item = styled.div`
  flex-basis: 28%;

  > h3 {
    margin-bottom: ${spacing.small};
  }

  @media only screen and (max-width: ${wrapper.large}) {
    &:first-child {
      margin-bottom: ${spacing.large};
    }
  }
`

Trinity.defaultProps = {
  trinity: null
}

Trinity.propTypes = {
  heading: PropTypes.string,
  lede: PropTypes.string,
  trinity: PropTypes.object
}

export default Trinity
