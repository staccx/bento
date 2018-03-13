import React from "react"
import { inject, observer } from "mobx-react"
import QuestionLead from "./../components/QuestionLead"

const Intro = inject("uiStore")(
  observer(({ uiStore }) => {
    const {cmsStart, translate} = uiStore
    if(!cmsStart) {
      return null
    }

    return (
      <main>
        <QuestionLead question={translate(cmsStart.title)}>
          {translate(cmsStart.lead)}
        </QuestionLead>
      </main>
    )
  })
)

export default Intro
