import React from "react"
import TestQuestion from "../components/TestQuestion"

const content = {
  title: "What is the purpose of your savings?",
  answers: [
    {
      id: "4456rew4ewr",
      heading: "I may need it the next few years",
      body:
        "I might want a new car, cabin or house. Or I owe taxes that will be paid soon.",
      value: "short"
    },
    {
      id: "fds6s5fds",
      heading: "In case of rainy days",
      body: "Life is unpredictable and I may need the money soon.",
      value: "short-plus"
    },
    {
      id: "2424fdssf",
      heading: "I don't have a goal",
      body:
        "Does not save to anything special. The most important thing is to put the savings into work.",
      value: "medium"
    },
    {
      id: "sadgfbaas42",
      heading: "Create a fortune",
      body:
        "Live the dream, become an investor, start on your own or save for the next generation.",
      value: "long"
    },
    {
      id: "132dsdffds",
      heading: "Pension",
      body: "Sit back when I retire. Do as I want and have money left over.",
      value: "long-plus"
    }
  ]
}

const Purpose = () => <TestQuestion content={content} />

export default Purpose
