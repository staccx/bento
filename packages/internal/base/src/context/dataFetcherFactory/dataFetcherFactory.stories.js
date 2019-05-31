import React from "react"
import { storiesOf } from "@storybook/react"
import doc from "./dataFetcherFactory.md"
import ReactJson from "react-json-view"
import factory from "./dataFetcherFactory"
const [DataProvider, useData] = factory("/uuid", [], {
  baseUrl: "https://httpbin.org/",
  loop: 5000
})

const [AnotherDataProvider, useOtherData] = factory("/uuid", [], {
  baseUrl: "https://httpbin.org/",
  loop: 3000
})

const ComponentA = () => {
  const { data, isLoading } = useData()

  if (isLoading) return <div>loading...</div>
  return <ReactJson src={data} theme={"monokai"} />
}

const ComponentB = () => {
  const { data, isLoading } = useOtherData()

  if (isLoading) return <div>loading...</div>
  return <ReactJson src={data} theme={"monokai"} />
}

storiesOf("context|base/dataFetcherFactory", module).add(
  "Data",
  () => (
    <DataProvider>
      <AnotherDataProvider>
        <ComponentA />
        <ComponentB />
      </AnotherDataProvider>
    </DataProvider>
  ),
  { info: { text: doc } }
)
