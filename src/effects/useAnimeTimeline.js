import anime from "animejs"
import { useRef } from "react"

export const useAnimeTimeline = ({
  targets = [],
  direction = "normal",
  loop = false,
  ...rest
}) => {
  const timeline = useRef(
    anime.timeline({
      targets,
      direction,
      loop,
      ...rest
    })
  )

  return timeline
}
