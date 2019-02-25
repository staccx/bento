import React, { useState, useEffect } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import Gauge from "./components/Gauge"
import Table from "./components/Table"
import { getResult } from "./data/api"
import theme from "./theme"

const App = ({ graphWeight = "1 1 1", country = null }) => {
  const weights = graphWeight.split(" ").map(v => parseFloat(v, 10))

  const [isLoading, setIsLoading] = useState(false)
  const [otherData, setOtherData] = useState({
    us: {
      comment: ""
    },
    no: {
      comment: ""
    }
  })

  const get = async () => {
    setIsLoading(true)
    const { us, no } = await getResult()
    setOtherData({ us, no })
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
        <Wrapper size="small" variant={["container"]}>
          {(country === "no" || !country) && otherData.no && (
            <Gauge
              weights={weights}
              data={otherData.no}
              header={"Status AI Macro"}
              country={"Norway"}
              indexName={"OSE OBX Index"}
            >
              {otherData.no.comment}
            </Gauge>
          )}
          {(country === "us" || !country) && otherData.us && (
            <Gauge
              weights={weights}
              data={otherData.us}
              header={"Status AI Macro"}
              country={"USA"}
              indexName={"S&P 500 PM"}
            >
              {otherData.us.comment}
            </Gauge>
          )}
        </Wrapper>
        <hr />
        <hr />
        <hr />
        <div>
          <Table data={otherData.us.tableData} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
