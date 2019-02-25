import React, { useEffect, useState } from "react"
import { Wrapper, Loading, theming } from "@staccx/base"
import { getResult } from "../data/api"
import Gauge from "./Gauge"
import { ThemeProvider } from "styled-components"
import theme from "../theme"

const Gauges = ({ graphWeight = "1 1 1", country = null }) => {
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
      </div>
    </ThemeProvider>
  )
}

export default Gauges
