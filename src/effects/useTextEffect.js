import { useEffect, useRef, useState } from "react"
import { useAnimeTimeline } from "./useAnimeTimeline"

export const useTextEffect = ({
  element = null,
  timelineConfig = {},
  effects = []
}) => {
  const [completed, completedSet] = useState(false)
  const initialized = useRef(false)
  const timeline = useAnimeTimeline({
    ...timelineConfig
  })

  const addEffect = effect => {
    if (!timeline.current) {
      console.log("No timeline")
      return
    }
    timeline.current.add(effect)
  }

  useEffect(() => {
    if (element && element.current) {
      if (timeline.current) {
        for (const effect of effects) {
          if (!effect.targets) {
            console.log("No targets!")
            return
          }
          addEffect(effect)
        }
        timeline.current.finished.then(() => completedSet(true))
        initialized.current = true
      }
    } else if (timeline.current) {
      for (const effect of effects) {
        if (!effect.targets) {
          console.log("No targets!")
          return
        }
        addEffect(effect)
      }
      timeline.current.finished.then(() => completedSet(true))
      initialized.current = true
    }
  }, [timeline, element])

  const play = () => {
    if (timeline.current) {
      timeline.current.play()
    }
  }

  const pause = () => {
    if (timeline.current) {
      timeline.current.pause()
    }
  }

  const restart = () => {
    if (timeline.current) {
      timeline.current.restart()
    }
  }

  const seek = value => {
    if (timeline.current) {
      const percent = value > 1 ? value / 100 : value
      timeline.current.seek(timeline.current.duration * percent)
    }
  }

  return {
    completed,
    timeline,
    play,
    pause,
    restart,
    seek
  }
}
