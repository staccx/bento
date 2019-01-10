import React from "react"
import { Convert } from "@staccx/i18n"
import QuestionLead from "../QuestionLead"

const Start = ({ lead, title, data }) => {
  if (data) {
    lead = data.lead
    title = data.name
  }

  return (
    <main>
      <QuestionLead question={<Convert data={title}>{val => val}</Convert>}>
        <Convert data={lead}>{val => val}</Convert>
      </QuestionLead>
    </main>
  )
}

export default Start
