import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Box, Button, SplitListItem, theming, ItemGroup } from "@staccx/base"

const AccountFilter = ({ years, selected, onClick }) => (
  <Box variant="accountFilterFooter">
    <ItemGroup>
      {years.map((year, index) => (
        <Button
          key={"year" + index}
          variant="tag"
          selected={index === selected}
          onClick={() => onClick(index)}
        >
          {year}
        </Button>
      ))}
    </ItemGroup>
  </Box>
)

// TODO: denne komponenten må ekspandere og faktisk filtrere, men burde ikke gjøres før vi har skikkelig data.

const Strong = styled.strong`
  font-weight: ${theming.fontWeight.normal};
`
export const AccountInfoListItem = styled(SplitListItem)`
  padding: 10px 0;
  border-color: ${theming.color("accountInfoBorder")};
  color: ${theming.color.wcag};
  ${p =>
    p.emphasize &&
    css`
      &,
      & ${Strong} {
        font-weight: ${theming.fontWeight.bold};
      }
    `};
`

AccountFilter.defaultProps = {
  years: ["2018", "2017"]
}

AccountFilter.propTypes = {
  years: PropTypes.array
}

export default AccountFilter
