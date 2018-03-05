import React from "react"
import TestQuestion from "../components/TestQuestion"

const content = {
  title: "Do you have experience with funds or investments?",
  answers: [
    {
      id: "8924qdwsacv",
      heading: "I have never invested",
      body: "Your money is perhaps on an high interest account?",
      value: "no"
    },
    {
      id: "wt4iw12",
      heading: "I have invested before",
      body: "You have maybe invested in funds or stocks?",
      value: "yes"
    }
  ]
}

const Start = () => <TestQuestion content={content} />

export default Start
