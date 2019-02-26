import React, { useEffect, useState } from "react"
import { Loading, theming } from "@staccx/base"
import { getResult } from "../data/api"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import Table from "./Table"

const getCountryLabel = country =>
  `Macro Table ${country === "us" ? "USA" : "Norway"}`

const Tables = ({ country = null }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    us: {},
    no: {}
  })

  const get = async () => {
    setIsLoading(true)
    const { us, no } = await getResult()
    setData({ us, no })
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isLoading) {
      get()
    }
    return () => null
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div>
        {isLoading && (
          <Loading
            variant={"finger"}
            idleTime={0}
            color={theming.color.primary()({ theme })}
          />
        )}
        {(country === "no" || !country) && data.no && data.no.tableData && (
          <Table
            data={data.no.tableData}
            label={getCountryLabel("no")}
            country={"no"}
          />
        )}
        {(country === "us" || !country) && data.us && data.us.tableData && (
          <Table
            data={data.us.tableData}
            label={getCountryLabel("us")}
            country={"us"}
          />
        )}
      </div>
    </ThemeProvider>
  )
}

export default Tables
