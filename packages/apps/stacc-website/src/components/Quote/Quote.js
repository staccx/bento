import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Wrapper, Image, Flag } from "@staccx/base"
import { spacing, font } from "@staccx/theme"
import FullWidth from "../FullWidth/FullWidth"

const Quote = ({ quote, img, name, isReverse }) => (
  <FullWidth>
    <Container>
      <Wrapper>
        <Flag
          large
          reverse={isReverse}
          img={<Image aspectRatio="1:1" round src={img} width={220} />}
          responsive="550"
        >
          <BlockQuote>
            {quote}
            <Footer>
              — <cite>{name}</cite>
            </Footer>
          </BlockQuote>
        </Flag>
      </Wrapper>
    </Container>
  </FullWidth>
)

const Container = styled.div`
  background-color: #fff1e3;
  padding-top: ${spacing.huge};
  padding-bottom: ${spacing.huge};
`

const BlockQuote = styled.blockquote`
  font-size: ${font.h2};
  @media only screen and (max-width: 750px) {
    font-size: ${font.h3};
  }
`

const Footer = styled.footer`
  font-size: ${font.base};
  margin-top: ${spacing.medium};
`

Quote.propTypes = {
  quote: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  isReverse: PropTypes.boolean
}

Quote.defaultProps = {
  quote: "",
  img: "",
  name: "",
  isReverse: false
}

export default Quote
