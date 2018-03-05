import styled, { css } from "styled-components"

export const Heading = css`
  text-align: center;
  font-weight: 100;
  margin-top: ${p => p.theme.spacing.huge};
`

export const Heading1 = styled.h1`
  ${Heading};
  font-size: ${p => p.theme.font.size.h1};
  color: ${p => p.theme.color.grayDark};
  margin-bottom: ${p => p.theme.spacing.medium};
`

export const Heading2 = styled.h2`
  ${Heading};
  font-size: ${p => p.theme.font.size.h2};
  color: ${p => p.theme.color.wcag};
`
