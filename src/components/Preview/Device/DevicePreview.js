import React from "react"
import { css } from "styled-components"
import PropTypes from "prop-types"
import {
  Buttons,
  Content,
  Device,
  Frame,
  Header,
  Power,
  Sensors,
  Stripe
} from "./DevicePreview.devices"

const defaultBackground = css`
  background: linear-gradient(white, white);
`

const DevicePreview = ({
  type = "iphoneX",
  background = defaultBackground,
  children
}) => {
  return (
    <Device type={type} background={background}>
      <Frame>
        <Content>{children}</Content>
      </Frame>
      <Stripe className="device-stripe"></Stripe>
      <Header className="device-header"></Header>
      <Sensors className="device-sensors"></Sensors>
      <Buttons className="device-btns"></Buttons>
      <Power className="device-power"></Power>
    </Device>
  )
}

DevicePreview.propTypes = {
  type: PropTypes.oneOf(["iphoneX", "ipadPro", "macbookPro"]),
  children: PropTypes.element
}

export default DevicePreview
