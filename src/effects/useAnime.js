import anime from "animejs"
import { useRef, useEffect } from "react"

export const useAnime = ({
  targets = [],
  direction = "normal",
  loop = false,
  autoplay = true,
  ...rest
}) => {
  const animation = useRef()

  useEffect(() => {
    animation.current = anime({
      targets,
      direction,
      loop,
      autoplay,
      ...rest
    })
  }, [targets, direction, loop, autoplay])

  return animation
}
