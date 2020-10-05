import React from "react"
import Expand from "./Expand"

export default {
  title: "Components/Expand",
  component: Expand
}

export const ExpandSpan = args => (
  <Expand title="click to see">
    <span>Click me to see</span>
    <div>
      <p>Some more text</p>
    </div>
  </Expand>
)

export const ExpandP = args => (
  <Expand>
    <p>Click me to see</p>
    <div>
      <p>Even more text</p>
    </div>
  </Expand>
)

export const ExpandDiv = args => (
  <Expand>
    <div>
      <p>All of me</p>
      <p>Can be clicked to show</p>
    </div>
    <div>This text is also possible to read</div>
  </Expand>
)

export const ExpandShowUl = args => (
  <Expand>
    <span>Expand me</span>
    <div>
      <ul>
        <li>I am hidden</li>
        <li> Until you expand</li>
      </ul>
    </div>
  </Expand>
)

export const ExpandNoHideIcon = args => (
  <Expand {...args}>
    <span>Click me to see</span>
    <div>
      <p>this</p>
    </div>
  </Expand>
)

ExpandNoHideIcon.args = { hideIcon: true }

export const ExpandExpanded = args => (
  <Expand {...args}>
    <span>Click me to hide</span>
    <div>
      <p>this</p>
    </div>
  </Expand>
)

ExpandExpanded.args = { expanded: true }
