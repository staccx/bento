import React from "react"
import styled from "styled-components"
import { spacing, color } from "@staccx/theme"
import { Box } from "@staccx/base"

const OfferTable = ({
  loanOfferText,
  loanAmount,
  loanDurationText,
  loanRepayment,
  monthlyFeeText,
  interestRate,
  paybackText,
  paybackAmount,
  payMonthlyText,
  payMonthlyAmount
}) => (
  <Details>
    <Box variant="expandLeadContent">
      <OfferTableTable>
        <tbody>
          <tr>
            <OfferTableText>{loanOfferText}</OfferTableText>
            <OfferTableData>{loanAmount}</OfferTableData>
          </tr>
          <tr>
            <OfferTableText>{loanDurationText}</OfferTableText>
            <OfferTableData>{loanRepayment}</OfferTableData>
          </tr>
          <tr>
            <OfferTableText>{monthlyFeeText}</OfferTableText>
            <OfferTableData>{interestRate}%</OfferTableData>
          </tr>
          <tr>
            <OfferTableText>{paybackText}</OfferTableText>
            <OfferTableData>{paybackAmount}</OfferTableData>
          </tr>
          <OfferTableTotal>
            <OfferTableText>{payMonthlyText}</OfferTableText>
            <OfferTableData>{payMonthlyAmount}</OfferTableData>
          </OfferTableTotal>
        </tbody>
      </OfferTableTable>
    </Box>
  </Details>
)

const Details = styled.div`
  margin-top: ${spacing.medium};
`

export const OfferTableTable = styled.table`
  width: 100%;
  table-layout: fixed;

  tr:last-child {
    td {
      border-bottom-width: 0;
    }
  }
`

export const OfferTableText = styled.td`
  padding: ${spacing.small} 0 ${spacing.small} ${spacing.small};
  border-bottom: 1px solid ${color.line};
  text-align: left;
`

export const OfferTableData = styled(OfferTableText)`
  text-align: right;
  padding: ${spacing.small} ${spacing.small} ${spacing.small} 0;
`

export const OfferTableTotal = styled.tr`
  font-weight: bold;
`
export const OfferTableDurations = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const OfferTableDurationsItem = styled.div`
  &:not(:last-child) {
    margin-right: ${spacing.small};
  }
`

export default OfferTable
