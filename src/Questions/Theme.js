import React from "react"
import TestQuestion from "../components/TestQuestion"

const content = {
  title: "Do you want to customize where your money is saved?",
  answers: [
    {
      id: "8924qdwsacv",
      heading: "yes",
      body: "👍",
      value: "no"
    },
    {
      id: "wt4iw12",
      heading: "no",
      body: "👎",
      value: "yes"
    }
  ]
}

const Start = () => <TestQuestion content={content} />

export default Start
