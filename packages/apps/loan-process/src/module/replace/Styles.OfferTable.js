import styled from "styled-components"
import { spacing, color } from "@staccx/theme"

export const OfferTable = styled.table`
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
