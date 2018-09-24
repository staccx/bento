import React from "react"

const Hero = ({
  headingMain,
  subHeadingMain,
  headingSecondary,
  hverdagsbilTitle,
  hverdagsbilSub,
  hyttebilTitle,
  hyttebilSub,
  flyttebilTitle,
  flyttebilSub,
  morobilTitle,
  morobilSub,
  children
}) => (
  <div>
    <h1>{headingMain}</h1>
    <span>{subHeadingMain}</span>
    <h2>{headingSecondary}</h2>
    {children}
  </div>
)

export default Hero
