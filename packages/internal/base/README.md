# Base

## NOTE

Project using _Base_ needs to have styled-components as a dependency
// @todo: Split readme into «creating base components» and «using bento/theming in your projects»?

## Install

```bash
yarn add @staccx/base styled-components@3.2.6
```

## Usage

#### Minimum requirement

```javascript
import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import { Input, BaseTheme } from "@staccx/base"

class Example extends Component {
  render() {
    return (
      <ThemeProvider theme={BaseTheme}>
        <Input />
      </ThemeProvider>
    )
  }
}
```

## Theming

```javascript
// theme.js
import { themeManager } from "@staccx/base"

const font = {
  input: "12px"
}

const color = {
  input: "#a1231a"
}

const spacing = {
  small: "9px"
}

themeManager
  .addGlobal("font", font)
  .addGlobal("color", color)
  .addGlobal("spacing", spacing) //Chains

export default themeManager.Theme
```

```javascript
// app.js
import theme from "./theme.js"

render() {
    return (
    <ThemeProvider theme={theme}>
        <Input />
    </ThemeProvider>
    )
  }
```

## Adding styles to base components

In order to do this you need `@staccx/theme` // TODO: Should this be proxied through base?

```javascript
// myInputStyle.js
import { css } from "styled-components"
import { InputStyles } from "@staccx/base"
import { registerStyle, color, spacing } from "@staccx/theme"

export const myInputStyle = registerStyle(
  css`
    margin-right: ${spacing.medium};
    color: ${color.primary};
  `,
  InputStyles.INPUT
)

export const myInputLabelStyle = registerStyle(
  css`
    position: absolute;
    left: ${spacing.medium};
    top: ${spacing.medium};
    color: ${color.black};
  `,
  InputStyles.INPUT_LABEL
)
```

```javascript
// theme.js
import { themeManager, InputStyles } from "@staccx/base"
import { myInputStyle, myInputLabelStyle } from "./myInputStyle"

themeManager.addStyle(myInputStyle).addStyle(myInputLabelStyle)

export default themeManager.Theme
```

```javascript
// app.js
import theme from "./theme.js"

render() {
    return (
    <ThemeProvider theme={theme}>
        <Input />
    </ThemeProvider>
    )
  }
```

## Themify base components

When creating new components in base, you need to enable theming of them. This is not relevant when using bento in other projects.

```javascript
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  font,
  color,
  themify
} from "@staccx/theme"

export const BUTTON = "Button"
const Style = css`
  background-color: ${color.primary};
  border-width: 0;
  ... ${applyVariants(BUTTON)}; // This is the magic
`
const Button = styled.button`
  ${Style};
`

// ... adding proptypes and other stuff
export default Button
```

### Note: Make sure that the string sent to `themify` is unique

## Adding Replace-components

Some components are replaceable. This is mainly icons that you might want to change,
but it might be extended further later.

Again, this is when creating a new bento component and enabling it for theme-replacable components. This is not relevant when using bento in other projects.

```javascript
import styled from "styled-components"
import {ThemeComponent} from "@staccx/theme" // Use this component to achieve this
import MyDefaultComponent from "./MyDefaultComponent" // 👈 fallback component

// This is the actual code that enables replacibility
export const COMPONENT_EXPAND_LIST_ICON = "COMPONENT_EXPAND_LIST_ICON"
const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_EXPAND_LIST_ICON}
    fallback={Caret}
    {...props} // 👈 Important
  />
)

// Styled the actual component and themify
export const EXPAND_LIST_ICON = "EXPAND_LIST_ICON"
const ExpandIcon = styled(IconComponent)`
  position: absolute;
  top: 16px;
  right: ${spacing.small};
  fill: ${color.line};
  transition: transform 0.3s ease-out;
  transform: ${p => (p.isExpanded ? "rotate(180deg)" : "rotate(0)")};
  ${applyVariants(EXPAND_LIST_ICON)};
`

...

// Usage
<OtherMarkup>
<ExpandIcon />
</OtherMarkup>
```

### Replacing ☝️ components

When using Bento/theming some, some components within Bento-components are user-replaceable. This is how you for example insert your own Expand-icon into the ExpandList-component.

```javascript
// theme.js
import {themeManager} from "@staccx/base"
import MyCoolIcon from "./MyNewCoolCaret"

themeManager
 .addGlobal(Icons.COMPONENT_EXPAND_LIST_ICON, MyCoolIcon)

 ...
```

## Variants

Sometimes using the same component and replacing just the style is needed.
Button is a great use case.

```javascript
// myButtonVariant.js
export const ButtonSubtleStyle = registerStyle(
  css`
    background-color: transparent;
    color: ${color.text};
    border-width: 0;
    border-bottom: 2px solid ${color.primary};
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    font-size: ${font.base};
    text-decoration: none;
    padding-bottom: 3px;

    &:hover,
    &:focus {
      outline: none;
      color: ${color.primary};
      border-bottom-color: ${p =>
        tinycolor(color.primary)
          .darken(10)
          .toString()};
      background-color: transparent;
    }
  `,
  ButtonStyles.BUTTON,
  "subtle"
) // Note the "subtle" name for the variant.
```

```javascript
// theme.js
import { themeManager } from "@staccx/base"
import { ButtonSubtleStyle } from "./ButtonSubtleStyle"

themeManager.addStyle(ButtonSubtleStyle)
```

```javascript
// app.js
import theme from "./theme.js"

render() {
    return (
    <ThemeProvider theme={theme}>
        <Button variant="subtle" />
    </ThemeProvider>
    )
  }
```
