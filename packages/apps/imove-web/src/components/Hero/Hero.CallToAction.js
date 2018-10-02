import React from "react"
import { Heading } from "@staccx/base"

const CallToAction = ({ heading, headingSub, buttons, hverdagsbil }) => (
  <div>
    <Heading>{heading}</Heading>
    <div>{headingSub}</div>
    <div>
      {buttons.map(x => (
        <a href={x.url} key={x._key}>
          {x.text}
        </a>
      ))}
    </div>
    <div>
      <img src={hverdagsbil.img} alt={hverdagsbil.imgAlt} />
    </div>
  </div>
)

export default CallToAction
