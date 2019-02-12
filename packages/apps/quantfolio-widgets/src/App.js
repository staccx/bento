import React, { useState, useEffect } from "react"
import { Wrapper } from "@staccx/base"
import { ThemeProvider } from "styled-components"
import { FunduTheme } from "@staccx/fundu-theme"
import Gauge from "./components/Gauge"
import { getResult } from "./data/api"

const App = () => {
  const [otherData, setOtherData] = useState({
    us: {
      comment: ""
    },
    no: {
      comment: ""
    }
  })

  const get = async () => {
    const { us, no } = await getResult()
    setOtherData({ us, no })
  }

  useEffect(() => {
    get()
    return () => null
  }, [])
  return (
    <ThemeProvider theme={FunduTheme}>
      <Wrapper size="small">
        {otherData.no && (
          <Gauge
            data={otherData.no}
            header={"Status AI Macro"}
            country={"Norway"}
            indexName={"OSE OBX Index"}
          >
            {otherData.no.comment}
          </Gauge>
        )}
        <Gauge
          data={otherData.us}
          header={"Status AI Macro"}
          country={"USA"}
          indexName={"S&P 500 PM"}
        >
          {otherData.us.comment}
        </Gauge>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
