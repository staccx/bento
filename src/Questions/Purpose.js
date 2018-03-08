import React from "react"
import {inject, observer} from "mobx-react"
import Question from "../components/Question"

const content = {
  title: "What is the purpose of your savings?",
  answers: [
    {
      id: "4456rew4ewr",
      heading: "I may need it the next few years",
      body:
        "I might want a new car, cabin or house. Or I owe taxes that will be paid soon.",
      value: 1
    },
    {
      id: "fds6s5fds",
      heading: "In case of rainy days",
      body: "Life is unpredictable and I may need the money soon.",
      value: 2
    },
    {
      id: "2424fdssf",
      heading: "I don't have a goal",
      body:
        "Does not save to anything special. The most important thing is to put the savings into work.",
      value: 2.5
    },
    {
      id: "sadgfbaas42",
      heading: "Create a fortune",
      body:
        "Live the dream, become an investor, start on your own or save for the next generation.",
      value: 3
    },
    {
      id: "132dsdffds",
      heading: "Pension",
      body: "Sit back when I retire. Do as I want and have money left over.",
      value: 4
    }
  ]
}

@inject("apiStore") @observer
class Purpose extends React.Component {
  render() {
    const {horizon, setHorizon} = this.props.apiStore
    return <Question selected={horizon} content={content} onChange={setHorizon}/>
  }
}

export default Purpose
