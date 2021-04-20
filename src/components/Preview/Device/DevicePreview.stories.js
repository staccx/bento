import styled, { css } from "styled-components"
import DevicePreview from "./DevicePreview"

const Height = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110vh;
  width: 100%;
  padding: 12px;
`

export default {
  title: "Components/Preview/Device",
  component: DevicePreview
}

export const IPhoneX = args => (
  <DevicePreview {...args}>Content here</DevicePreview>
)
IPhoneX.args = {
  type: "iphoneX"
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

export const Scroll = args => (
  <DevicePreview {...args}>
    <Height>
      <p>Top</p>
      <p>Bottom</p>
    </Height>
  </DevicePreview>
)
Scroll.args = {}
