import { css } from "styled-components"
import DevicePreview from "./DevicePreview"

export default {
  title: "Components/Preview/Device",
  component: DevicePreview
}

export const IPhoneX = args => (
  <DevicePreview {...args}>Content here</DevicePreview>
)
IPhoneX.args = {
  type: "iphoneX",
  background: css`linear-gradient(#eee, white);`
}
export const IpadPro = args => (
  <DevicePreview {...args}>Content here</DevicePreview>
)
IpadPro.args = {
  type: "ipadPro",
  background: css`linear-gradient(red, white);`
}
export const MacBookPro = args => (
  <DevicePreview {...args}>Content here</DevicePreview>
)
MacBookPro.args = {
  type: "macbookPro",
  background: css`linear-gradient(red, white);`
}
