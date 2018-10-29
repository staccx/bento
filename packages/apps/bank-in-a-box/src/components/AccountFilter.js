import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { formatCurrency } from "@staccx/formatting"
import { Box, Button, SplitListItem, theming } from "@staccx/base"

const AccountFilter = ({ account, type, duration, details = true }) => (
  <Box variant={"accountFilter"}>
    <Box variant={"accountFilterHeader"}>
      <div>{account.accountType === "LOAN" ? "Lån" : "På konto"}</div>
      <div>{formatCurrency(account.availableBalance, { precision: 2 })}</div>
    </Box>
    {details && (
      <Box variant="accountFilterFooter">
        <div>
          Viser <strong>alle</strong> {type} <strong>{duration}</strong>
        </div>
        <div>
          <Button variant="accountFilter">Endre</Button>
        </div>
      </Box>
    )}
  </Box>
)

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
  type: "transaksjoner",
  duration: "siste 30 dager"
}

AccountFilter.propTypes = {
  account: PropTypes.object.isRequired,
  type: PropTypes.string,
  duration: PropTypes.string
}

export default AccountFilter
