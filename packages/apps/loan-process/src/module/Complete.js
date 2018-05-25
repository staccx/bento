import React from "react"
import PropTypes from "prop-types"
import { Box, Button, Heading, Paragraph, Wrapper } from "@staccx/base"
import styled from "styled-components"
import Confetti from "react-dom-confetti"

const confettiOptions = {
  angle: 90,
  spread: 90,
  startVelocity: 25,
  elementCount: 60,
  decay: 0.95
}

class Complete extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      confettiActive: false
    }
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          confettiActive: !this.state.confettiActive
        }),
      this.props.animationDelay
    )
  }

  render() {
    const {
      onClick,
      headingText,
      leadText,
      buttonText,
      illustrationUrl
    } = this.props
    return (
      <Wrapper size="medium">
        <Box variant="centeredContainer">
          <Outer>
            <Container className={this.props.className}>
              <ConfettiContainer>
                <Confetti
                  active={this.state.confettiActive}
                  config={confettiOptions}
                />
              </ConfettiContainer>
              <Illustration src={illustrationUrl} width="200" />
            </Container>
          </Outer>
          <Heading variant="centered">{headingText}</Heading>
          <Paragraph variant="lead">{leadText}</Paragraph>
          <Button onClick={onClick}>{buttonText}</Button>
        </Box>
      </Wrapper>
    )
  }
}

export default Complete

Complete.propTypes = {
  animationDelay: PropTypes.any,
  buttonText: PropTypes.string,
  className: PropTypes.any,
  headingText: PropTypes.string,
  illustrationUrl: PropTypes.string.isRequired,
  leadText: PropTypes.string,
  onClick: PropTypes.func
}

Complete.defaultProps = {
  buttonText: "Gå til min side",
  headingText: "Gode greier!",
  leadText: "Da har vi det vi trenger",
  onClick: console.log,
  illustrationUrl: "https://lorempixel.com/420/320/abstract/1/Sample"
}

const Outer = styled.div`
  text-align: center;
`

const Container = styled.div`
  position: relative;
  display: inline-block;
`
const ConfettiContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Illustration = styled.img`
  display: block;
  margin: 0 auto 24px;
`
