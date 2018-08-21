import React from "react"
import { Table } from "@staccx/base"
import getFinancingLabel from "../../helpers/getFinancingLabel"
import { formatCurrency } from "@staccx/formatting"

const formatValue = (label, value) => {
  switch (label) {
    case "rentLength":
      return value
    case "rentFrequency":
      return value === "monthly" ? "Månedlig" : "Årlig"
    case "totalInterest":
      return value * 100 + " %"
    default:
      return typeof value === "number" ? formatCurrency(value) : value
  }
}

const FinancingTable = ({ caseFinancing }) => {
  const data = Object.keys(caseFinancing).map(key => ({
    label: key,
    value: formatValue(key, caseFinancing[key])
  }))

  return (
    <div>
      <Table
        data={data}
        blacklist={item => item === "label"}
        renderHeader={({ item }) => (
          <th key={item.title} colSpan="2">
            Finansiering
          </th>
        )}
      >
        {({ item }) => (
          <React.Fragment key={getFinancingLabel(item.label)}>
            <th>{getFinancingLabel(item.label)}</th>
            <td>{item.value}</td>
          </React.Fragment>
        )}
      </Table>
    </div>
  )
}

export default FinancingTable
