import {
  format,
  formatDistance,
  formatRelative,
  parseISO,
  Locale
} from "date-fns"
import nb from "date-fns/locale/nb"

type DateArgument = string | Date

const parse = (date: DateArgument) => {
  if (typeof date === "string") {
    return parseISO(date)
  }

  return date
}

export const formatDate = (
  date: DateArgument,
  dateFormat: string = "dd MMMM yyyy",
  locale: Locale = nb
) => {
  return format(parse(date), dateFormat, { locale })
}

type FormatDistanceOptions = {
  addSuffix?: boolean
  includeSeconds?: boolean
  locale?: Locale
}

export const formatDateDistance = (
  frm: DateArgument,
  to: DateArgument = new Date(),
  locale: Locale = nb,
  opts: FormatDistanceOptions = {}
) => {
  return formatDistance(parse(frm), parse(to), { locale, ...opts })
}

type FormatRelativeOptions = {
  locale?: Locale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const formatDateRelative = (
  frm: DateArgument,
  to: DateArgument,
  locale: Locale = nb,
  opts: FormatRelativeOptions = {}
) => formatRelative(parse(frm), parse(to), { locale, ...opts })
