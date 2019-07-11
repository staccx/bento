import React from "react"
import { storiesOf } from "@storybook/react"
import doc from "./dataFetcherFactory.md"
import ReactJson from "react-json-view"
import factory from "./dataFetcherFactory"

const [DataProvider, useData] = factory()
const [AnotherDataProvider, useOtherData] = factory()

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
        <ComponentA
          path={"/uuid"}
          initialData={[]}
          loop={3000}
          axiosOptions={{
            baseUrl: "https://httpbin.org/"
          }}
        />
        <ComponentB
          path={"/uuid"}
          initialData={[]}
          loop={5000}
          axiosOptions={{
            baseUrl: "https://httpbin.org/"
          }}
        />
      </AnotherDataProvider>
    </DataProvider>
  ),
  { info: { text: doc } }
)
