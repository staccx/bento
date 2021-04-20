import React from "react"
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

const DevicePreview = ({ type = "iphoneX", background, children }) => {
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
