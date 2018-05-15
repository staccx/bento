import { format, formatDistance, formatRelative } from "date-fns"
import { nb } from "date-fns/esm/locale"

export const formatDate = (date, frmat = "DD MMMM YYYY", locale = nb) => {
  return format(date, frmat, { locale })
}

export const formatDateDistance = (from, to = new Date(), locale = nb, opts) =>
  formatDistance(from, to, { locale, ...opts })

export const formatDateRelative = (from, to, locale = nb, opts) =>
  formatRelative(from, to, { locale, ...opts })
