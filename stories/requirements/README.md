# Requirements

## Overview
When creating new components or functions in bento, there are a few requirements


## NOTE
Whenever you see `func` from noe on it translates to `function or component`

## Requirement 1: Unit test
Write unit tests for new `func`.
We use `jest` to write the tests and `react-test-renderer` to mount and test React components

We use `describe`, `it` and `expect` to test our stuff. YOU DO NOT NEED TO IMPORT THESE

`describe` is used to give context to a test suite (collection of tests with some commonality).

`it` is used to prosaically describe the test.

`expect` takes a input and returns an object that can compare.

```
// test a function
import add from "./add" // import your code
describe("Add two numbers", () => {
  it("Should add two numbers together", () => {
    expect(add(1,1).toBe(2)
  })
})
```

```jsx
// test a component
import React from "react"
import Input from "./Input"

describe("Input", () => {
  it("Should work with no props", () => {
    const ref = React.createRef()
    const utils = render(<Input ref={ref} />)
    expect(ref.current.value).toBe("")
    fireEvent.change(ref.current, { target: { value: "wow" } })
    utils.rerender(<Input ref={ref} />)
    expect(ref.current.value).toBe("wow")
  })
})
```

## Requirement 2: Markdown documentation
Prosaic text describing the functionality behind the `func`. This should be easy to read, easy to understand. Use headings and paragraphs and dont be afraid of the occational meme.

Your teammates should be able to read this and understand why the `func` exists.

There should exist plenty of examples here to allow you to write these.

## Requirement 3: Stories
All new `func` shall have one or more stories. This is quite simple:
```
import React, { useRef } from "react"
import { storiesOf } from "@storybook/react"
import Input from "./Input"
import Button from "../../Button/Button"

const RefTest = () => {
  const input = useRef(null)

  return (
    <div>
      <Input label={"Handling focus"} ref={input} />
      <Button onClick={() => input.current.focus()}>Focus</Button>
      <Button onClick={() => input.current.blur()}>unFocus</Button>
    </div>
  )
}

const StorybookInput = props => (
  <div>
    <Input {...props} />
  </div>
)

storiesOf("Components|Base/Forms/Input", module)
  .add("No props", () => <StorybookInput />)
  .add("With label", () => <StorybookInput label={"Your label"} />)
  .add("Log", () => (
    <StorybookInput label={"Your label"} onChange={console.log} />
  ))
  .add("Focus", () => <RefTest />)
  .add("Default value", () => (
    <StorybookInput defaultValue={"This is the default value"} />
  ))
  .add("Placeholder", () => <StorybookInput placeholder={"Placeholder"} />)
  .add("Help text", () => (
    <StorybookInput label={"Helping you"} helpText={"This is a helping text"} />
  ))
  .add("Email", () => <StorybookInput label={"Your Email..."} type={"email"} />)
  .add("Text", () => <StorybookInput label={"Some text"} type={"text"} />)

```

### NOTES
* Try to at least match the number of stories with the amount of props/arguments
* Exhaust as many permutations as you can find with prop variety
* Stories should visual weaknesses the `func` might have (e.g long text renders outside etc)
* Use knobs where this makes sense

This page is created by writing a story
