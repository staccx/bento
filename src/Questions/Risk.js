import React from "react"
import TestQuestion from "../components/TestQuestion"

const content = {
  title:
    "What do you think when you see newspaper pages where the stock markets plummet?",
  answers: [
    {
      id: "fsdfds2",
      heading: "I get scared",
      body:
        "When I read such headlines, it affects night sleep. I want to sell my investments",
      value: "very-low"
    },
    {
      id: "fdsfd4447",
      heading: "I get uneasy",
      body: "I worry, but keep the night sleep. Keep calm with my investments.",
      value: "low"
    },
    {
      id: "fdsa23118",
      heading: "I keep the calm",
      body: "Do not care what the papers write. Keep calm with my investments.",
      value: "medium"
    },
    {
      id: "fdsafds14477",
      heading: "An excellent opportunity",
      body:
        "I do not worry at all. This is a golden opportunity, stocks become cheaper!",
      value: "medium-plus"
    }
  ]
}

const Risk = () => <TestQuestion content={content} />

export default Risk
