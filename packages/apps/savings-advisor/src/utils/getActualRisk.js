import { clamp, inverseLerp } from "@staccx/math"

export default (risk, min = 1, max = 100, low = 1, high = 3) =>
  Math.round(clamp(low, high, inverseLerp(min, max, risk) * high))
