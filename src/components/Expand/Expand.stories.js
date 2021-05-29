import React from "react"
import Expand from "./Expand"

export default {
  title: "Components/Expand",
  component: Expand
}

export const ExpandSpan = args => (
  <Expand title={<span>Dette er en span</span>}>
    <div>
      <p>Some more text</p>
    </div>
  </Expand>
)

export const ExpandP = args => (
  <Expand title={<p>Click me to see</p>}>
    <div>
      <p>Even more text</p>
    </div>
  </Expand>
)

export const ExpandDiv = args => (
  <Expand
    title={
      <div>
        <p>All of me</p>
        <p>Can be clicked to show</p>
      </div>
    }
  >
    <div>This text is also possible to read</div>
  </Expand>
)

export const ExpandShowUl = args => (
  <Expand title={<span>Expand me</span>}>
    <div>
      <ul>
        <li>I am hidden</li>
        <li> Until you expand</li>
      </ul>
    </div>
  </Expand>
)

export const ExpandNoHideIcon = args => (
  <Expand {...args} title={<span>Click me to see</span>}>
    <div>
      <p>this</p>
    </div>
  </Expand>
)

ExpandNoHideIcon.args = { hideIcon: true }

export const ExpandExpanded = args => (
  <Expand {...args} title={<span>{args.titleText}</span>}>
    <div>
      <p>this</p>
    </div>
  </Expand>
)

ExpandExpanded.args = { expanded: true, titleText: "i am default expanded" }
