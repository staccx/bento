import {css} from "styled-components"
const tinycolor = require("tinycolor2")

export default css`

  background-color: ${p => p.theme.globals.color.primary};
  color: ${p =>
  tinycolor
    .mostReadable(p.theme.globals.color.primary, ["#fff"], {
      includeFallbackColors: true,
      level: "AA",
      size: "large"
    })
    .toString()};
  border-width: 0;
  border-radius: 2px;
  padding: ${p => p.theme.globals.spacing.tiny} ${p => p.theme.globals.spacing.medium};
  cursor: pointer;
  min-height: ${p => p.theme.globals.targetSize.normal};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: ${p => p.theme.globals.font.size.base};
  font-family: ${p => p.theme.globals.font.body};
  line-height: 32px;
  font-weight: 600;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.globals.spacing.small};
  margin-bottom: ${p => p.theme.globals.spacing.small};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${p =>
  tinycolor(p.theme.globals.color.primary)
    .darken(5)
    .toString()};
    color: ${p =>
  tinycolor
    .mostReadable(tinycolor(p.theme.globals.color.primary).darken(5), ["#fff"], {
      includeFallbackColors: true,
      level: "AA",
      size: "large"
    })
    .toString()};
  }

  &:last-child,
  &:last-of-type {
    margin-right: 0;
  }
  &:last-child:first-child {
    margin-bottom: 0;
  }
`