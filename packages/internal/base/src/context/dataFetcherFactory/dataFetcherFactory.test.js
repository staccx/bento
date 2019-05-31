import React from "react"
import ReactDOM from "react-dom"
import factory from "./dataFetcherFactory"

const [AProvider, useA] = factory("/a", [], { loop: 5000 })
const [BProvider, useB] = factory("/b", [], { loop: 5000 })

const StateProvider = ({ children }) => {
  return (
    <AProvider>
      <BProvider>{children}</BProvider>
    </AProvider>
  )
}

const ComponentA = () => {
  const { data, isLoading } = useA()

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <pre>{data}</pre>
    </div>
  )
}

const ComponentB = () => {
  const { data, isLoading } = useB()

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <pre>{data}</pre>
    </div>
  )
}

const App = () => (
  <StateProvider>
    <ComponentA />
    <ComponentB />
  </StateProvider>
)

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
