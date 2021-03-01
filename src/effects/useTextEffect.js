import { useEffect, useRef, useState } from "react"
import { useAnimeTimeline } from "./useAnimeTimeline"

export const useTextEffect = ({ timelineConfig = {}, effects = [] }) => {
  const [completed, completedSet] = useState(false)
  const initialized = useRef(false)
  const timeline = useAnimeTimeline({
    ...timelineConfig
  })

  useEffect(() => {
    if (timeline.current) {
      initialized.current = true
      for (const effect of effects) {
        timeline.current.add(effect)
      }
      timeline.current.finished.then(() => completedSet(true))
    }
  }, [timeline])

  return {
    completed,
    timeline
  }
}
