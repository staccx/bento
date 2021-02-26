import { format, formatDistance, formatRelative, parseISO } from "date-fns"
import nb from "date-fns/locale/nb"

const parse = date => {
  if (typeof date === "string") {
    return parseISO(date)
  }

  return date
}

export const formatDate = (date, frmat = "dd MMMM yyyy", locale = nb) => {
  return format(parse(date), frmat, { locale })
}

export const formatDateDistance = (
  frm,
  to = new Date(),
  locale = nb,
  opts = {}
) => {
  return formatDistance(parse(frm), parse(to), { locale, ...opts })
}
export const formatDateRelative = (frm, to, locale = nb, opts = {}) =>
  formatRelative(parse(frm), parse(to), { locale, ...opts })
