import React from "react"
import Header from "./components/Header/Header"
import Home from "./pages/Home"

const Page = ({ data }) => (
  <div>
    <Header />
    <main>
      <Home data={data} />
    </main>
  </div>
)

export default Page
