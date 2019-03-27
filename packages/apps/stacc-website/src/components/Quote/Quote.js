import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Wrapper, Flag, theming } from "@staccx/base"
import FullWidth from "../FullWidth/FullWidth"

const Quote = ({ quote, img, name, isReverse }) => (
  <Outer>
    <FullWidth>
      <Container>
        <StyledWrapper>
          <Flag
            large
            reverse={isReverse}
            img={<Image src={img} width={220} />}
            responsive={550}
          >
            <BlockQuote>
              {quote}
              <Footer>
                — <cite>{name}</cite>
              </Footer>
            </BlockQuote>
          </Flag>
        </StyledWrapper>
      </Container>
    </FullWidth>
  </Outer>
)

const Outer = styled.div`
  &:last-child {
    margin-bottom: -${theming.spacing("grid")};
  }
`

const Image = styled.img`
  border-radius: 50%;
  overflow: hidden;
`

const StyledWrapper = styled(Wrapper)`
  padding-left: ${theming.spacing.medium} !important;
  padding-right: ${theming.spacing.medium} !important;
`

const Container = styled.div`
  background-color: #fff1e3;
  padding-top: ${theming.spacing.huge};
  padding-bottom: ${theming.spacing.huge};
`

const BlockQuote = styled.blockquote`
  font-size: ${theming.font.h2};
  @media only screen and (max-width: 850px) {
    font-size: ${theming.font.h3};
  }
`

const Footer = styled.footer`
  font-size: ${theming.font.base};
  margin-top: ${theming.spacing.medium};
`

Quote.propTypes = {
  quote: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  isReverse: PropTypes.bool
}

Quote.defaultProps = {
  quote: "",
  img: "",
  name: "",
  isReverse: false
}

export default Quote
