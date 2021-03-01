import { useTextEffect } from "./useTextEffect"
import { scaleElastic } from "./components/TextEffect.effects"
import Letters from "./components/Letters"
import React from "react"
import { Button, Heading, SliderKeyboardInput } from "../components"

export default {
  title: "effects/useTextEffect"
}

export const Controls = args => {
  const { effects, effectKey, lettersProps, LetterComponent } = scaleElastic()

  const { play, pause, restart, seek } = useTextEffect({
    effects: effects,
    timelineConfig: {
      autoplay: args.autoplay,
      loop: args.loop,
      ...(["alternate", "reverse", "normal"].includes(args.direction) && {
        direction: args.direction
      })
    }
  })

  return (
    <div>
      <Heading>
        <Letters
          {...lettersProps}
          effectKey={effectKey}
          Component={LetterComponent}
        >
          {args.text}
        </Letters>
      </Heading>
      <div>
        <Button onClick={play}>Play</Button>
        <Button onClick={pause}>Pause</Button>
        <Button onClick={restart}>Restart</Button>
        <SliderKeyboardInput
          defaultValue={args.progress}
          onChange={seek}
          min={0}
          max={100}
          label={"Seek"}
        ></SliderKeyboardInput>
      </div>
    </div>
  )
}

Controls.args = {
  text: "This is an animation which you can control",
  progress: 50,
  autoplay: true,
  loop: false,
  direction: "alternate"
}
