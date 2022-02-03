import { format, formatRelative, parseISO, Locale } from "date-fns"
import nb from "date-fns/locale/nb"

type DateArgument = string | Date

type FormatDateOptions = {
  locale?: Locale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: number
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

const parse = (date: DateArgument) => {
  if (typeof date === "string") {
    return parseISO(date)
  }

  return date
}

export const formatDate = (
  date: DateArgument,
  dateFormat: string = "dd MMMM yyyy",
  options: FormatDateOptions = {
    locale: nb
  }
) => {
  return format(parse(date), dateFormat, options)
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
