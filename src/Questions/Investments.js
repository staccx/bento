import React from "react"
import TestQuestion from "../components/TestQuestion"

const content = {
  title: "Hva skal være på dette steget?",
  answers: [
    {
      id: "8924qdwsacv",
      heading: "🤔",
      body: "",
      value: "no"
    },
    {
      id: "wt4iw12",
      heading: "😅",
      body: "",
      value: "yes"
    }
  ]
}

const Start = () => <TestQuestion content={content} />

export default Start
