import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"
import { Box } from "@staccx/base"

const OfferTable = ({
  loanOfferText,
  loanAmount,
  loanDurationText,
  loanRepayment,
  interestRateText,
  interestRate,
  paybackText,
  paybackAmount,
  payMonthlyText,
  payMonthlyAmount,
  showInterestRate,
  showDownpayment,
  showTotalMonthly,
  showAmount,
  showDuration
}) => (
  <Details>
    <Box variant="expandLeadContent">
      <OfferTableTable>
        <tbody>
          {showAmount && (
            <tr>
              <OfferTableText>{loanOfferText}</OfferTableText>
              <OfferTableData>{loanAmount}</OfferTableData>
            </tr>
          )}
          {showDuration && (
            <tr>
              <OfferTableText>{loanDurationText}</OfferTableText>
              <OfferTableData>{loanRepayment}</OfferTableData>
            </tr>
          )}
          {showInterestRate && (
            <tr>
              <OfferTableText>{interestRateText}</OfferTableText>
              <OfferTableData>{interestRate}%</OfferTableData>
            </tr>
          )}
          {showDownpayment && (
            <tr>
              <OfferTableText>{paybackText}</OfferTableText>
              <OfferTableData>{paybackAmount}</OfferTableData>
            </tr>
          )}
          {showTotalMonthly && (
            <OfferTableTotal>
              <OfferTableText>{payMonthlyText}</OfferTableText>
              <OfferTableData>{payMonthlyAmount}</OfferTableData>
            </OfferTableTotal>
          )}
        </tbody>
      </OfferTableTable>
    </Box>
  </Details>
)

const Details = styled.div`
  margin-top: ${spacing.medium};
`

const OfferTableTable = styled.table`
  width: 100%;
  table-layout: fixed;

  tr:last-child {
    td {
      border-bottom-width: 0;
    }
  }
`

const OfferTableText = styled.td`
  padding: ${spacing.small} 0 ${spacing.small} ${spacing.small};
  border-bottom: 1px solid ${color.line};
  text-align: left;
`

const OfferTableData = styled(OfferTableText)`
  text-align: right;
  padding: ${spacing.small} ${spacing.small} ${spacing.small} 0;
`

const OfferTableTotal = styled.tr`
  font-weight: bold;
`

OfferTable.propTypes = {
  showInterestRate: PropTypes.bool,
  showDownpayment: PropTypes.bool,
  showTotalMonthly: PropTypes.bool,
  showAmount: PropTypes.bool,
  showDuration: PropTypes.bool
}

OfferTable.defaultProps = {
  showInterestRate: true,
  showDownpayment: true,
  showTotalMonthly: true,
  showAmount: true,
  showDuration: true
}

export default OfferTable
