import React from "react"
import { Table } from "@staccx/base"
import getVehicleLabel from "../../helpers/getVehicleLabel"
import { formatCurrency } from "@staccx/formatting"

const formatValue = (label, value) => {
  switch (label) {
    case "maxMileage" || "mileageOverageFee":
      return formatCurrency(value)
    default:
      return value
  }
}

const ObjectTable = ({ caseObject }) => {
  const concatObject = {
    ...caseObject,
    make: caseObject.vehicle + " " + caseObject.model + " – " + caseObject.year
  }
  delete concatObject.year
  delete concatObject.model
  delete concatObject.type

  const data = Object.keys(concatObject).map(key => ({
    label: key,
    value: formatValue(key, concatObject[key])
  }))

  return (
    <div>
      <Table
        data={data}
        blacklist={item => item === "label"}
        renderHeader={({ item }) => <th colSpan="2">Objekt</th>}
      >
        {({ item }) => (
          <React.Fragment>
            <th>{getVehicleLabel(item.label)}</th>
            <td>{item.value}</td>
          </React.Fragment>
        )}
      </Table>
    </div>
  )
}

export default ObjectTable
