import React from "react"

const Hero = ({
  headingMain,
  subHeadingMain,
  headingSecondary,
  buttonCarSale,
  buttonCarSubscribe,
  hverdagsbilName,
  hverdagsbilSubtitle,
  hyttebilName,
  hyttebilSubtitle,
  flyttebilName,
  flyttebilSubtitle,
  morobilName,
  morobilSubtitle,
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
