import React from "react"
import styled, { css } from "styled-components"
import { Heading1 } from "../styles/headings"
import QuestionLead from "./../components/QuestionLead"

const Intro = () => {
  return (
    <main>
      <QuestionLead question="Svar på enkle spørsmål">
        For å finne ut hvilke fond som passer for deg, trenger du bare å svare
        på en håndfull enkle spørsmål. Vi analyserer 50 000 fond for å finne de
        som gir deg best avkastning for ditt risikonivå.
      </QuestionLead>
      <Heading1 />
    </main>
  )
}

export default Intro
