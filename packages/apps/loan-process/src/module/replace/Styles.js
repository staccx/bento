import styled, { css } from "styled-components"
import Tile from "./Tile"
import { spacing, color, font } from "@staccx/theme"

export const Halves = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${spacing.large};
  grid-template-areas: "left right";
  @media (max-width: 735px) {
    grid-gap: ${spacing.medium};
  }
  @media (max-width: 710px) {
    grid-template-columns: 100%;
    grid-template-areas: "one";
  }
`

export const ColumnHalves = styled.div`
  columns: 2 320px;
  column-gap: ${spacing.large};
  > * {
    margin-bottom: ${spacing.large};
  }
  @media (max-width: 735px) {
    column-gap: ${spacing.medium};
    > * {
      margin-bottom: ${spacing.medium};
    }
  }
`

export const FlexHalves = styled.div`
  @media (min-width: 711px) {
    display: flex;

    > * {
      width: 50%;
    }
  }
  @media (max-width: 710px) {
    flex-wrap: wrap;
    > * {
      width: 100%;
    }
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HorizontalLine = styled.hr`
  border-top: 1px solid ${color.line};
  border-bottom-width: 0;
`

export const VisuallyHidden = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
`

export const LinedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const LinedListItem = styled.li`
  position: relative;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${color.line};
  &:last-child {
    border-bottom-width: 0;
  }
`
export const Padding = styled.div`
  padding: ${spacing.medium};
`

export const PaddingVertical = styled.div`
  padding-top: ${spacing.medium};
  padding-bottom: ${spacing.medium};
`

export const Hr = styled.hr`
  height: 1px;
  width: 100%;
  border-width: 0;
  background-color: ${color.line};
`

export const Hide = css`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);
`

export const ButtonSecondaryCSS = css`
  background-color: ${color.white};
  color: ${color.text};
  border-radius: 22px;
  border: 1px solid ${color.white};
  transition: box-shadow 0.15s ease-in, border-color 0.2s ease-in;
  display: flex;
  margin-bottom: 0;

  &:hover,
  &:focus {
    background-color: ${color.white};
    border-color: ${color.blue};
    color: ${color.blue};
  }
`

export const H2 = css`
  font-size: ${font.h2};
  font-weight: 300;
`

export const H3 = css`
  font-size: ${font.h3};
  font-weight: 300;
`

export const FontSmoothing = css`
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
`

export const HeadingLarge = css`
  color: ${color.primary};
  font-size: ${font.huge};

  @media (max-width: 735px) {
    font-size: ${font.h1};
  }

  @media (max-height: 850px) {
    font-size: ${font.h2};
  }
`

export const BodyLarge = css`
  ${FontSmoothing};
  font-size: ${font.h2};
  line-height: 1.7;
  padding: ${spacing.large} 0 0;

  @media (max-width: 735px) {
    font-size: ${font.h3};
  }

  @media (max-height: 850px) {
    font-size: ${font.h4};
  }
`

export const BodyLargeCentered = css`
  ${BodyLarge};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  p {
    padding-bottom: ${spacing.small};
  }
`

export const PaddedContainer = styled.div`
  padding: ${p => (p.large ? spacing.large : spacing.medium)};
`
export const StepHeading = styled.h1`
  font-size: ${font.h2};
  font-weight: 300;
  margin-bottom: ${spacing.small};
`

export const GrayBox = styled.div`
  padding: ${spacing.medium} ${spacing.large};
  background-color: ${color.subtleHover};
`

export const split = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TileBox = styled(Tile)`
  padding: 0;
  margin-bottom: ${spacing.medium};
`
export const Illustration = styled.div`
  text-align: center;
  margin-bottom: ${spacing.medium};
`

export const DocumentStatusList = styled.ul`
  list-style-type: none;
  background-color: ${color.subtleHover};
`

export const DocumentStatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: ${spacing.small} ${spacing.medium};
  border-top: 1px solid ${color.line};
`
export const DocumentStatusContent = styled.div``

export const Heading = styled.h1`
  ${HeadingLarge};
  text-align: center;
  margin-bottom: ${spacing.medium};
`

export const Lead = styled.div`
  font-size: ${font.h5};
  text-align: center;
  margin-bottom: ${spacing.mediumPlus};
  padding: 0 ${spacing.small};
  line-height: 1.7;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

export const CenteredContainer = styled.div`
  text-align: center;
  width: 100%;
`

export const Split = styled.div`
  ${split};
`
