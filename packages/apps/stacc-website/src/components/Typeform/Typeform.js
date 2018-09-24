import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Button } from "@staccx/base"
import { spacing } from "@staccx/theme"
import * as typeformEmbed from "@typeform/embed"

class Typeform extends React.Component {
  constructor(props) {
    super(props)
    this.el = null
    this.state = {
      popup: typeformEmbed.makePopup(this.props.url, {
        hideFooter: true,
        hideHeaders: true,
        autoOpen: false,
        opacity: 0
      })
    }
  }
  componentDidMount() {
    if (this.el) {
    }
  }

  render() {
    return (
      <Container>
        <Button onClick={() => this.state.popup.open()}>
          {this.props.heading}
        </Button>
      </Container>
    )
  }
}

const Container = styled.div`
  margin-top: calc(-${spacing("gridLarge")} + ${spacing.medium});
`

Typeform.propTypes = {
  url: PropTypes.string.isRequired
}

export default Typeform
