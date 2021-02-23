import { formatNumber } from "./number"
import { CURRENCY_DISPLAY, STYLE } from "./number.constants"


export default {
  title: "formatting/Format number",
  component: formatNumber
}

export const Default = (args) => (
  <div>
    <p>
      Uses Norwegian locales by default <br />
      Result:
    </p>
    {formatNumber(args.value)}
  </div>
)

Default.args = {
  value: 100000
}

export const ChangeLocale = (args) => (
  <div>
    <p>
      Easily change locale, in this instance the locale is "en" <br />
      Result:
    </p>
    {formatNumber(args.value, {locale: args.locale})}
  </div>
)

ChangeLocale.args = {
  value: 100000,
  locale: "en"
}

export const Currency = (args) => (
  <div>
    <p>
      You can use it to do money formatting (NOTE: this also has its own function `formatMoney`) <br />
      Result:
    </p>
    {formatNumber(args.value, {style: args.style})}
  </div>
)

Currency.args = {
  value: 100000,
  style: STYLE.currency
}

export const Suffix = (args) => (
  <div>
    <p>
      This can be used for any style. but if you want a unit you should use Units <br />
      Result:
    </p>
    {formatNumber(args.value, {style: args.style, suffix: args.suffix})}
  </div>
)

Currency.args = {
  value: 100000,
  style: STYLE.currency,
  suffix: ".-"
}

export const CurrencyDisplayName = (args) => (
  <div>
    <p>
      You can add currencyDisplay, to show currency name <br />
      Result:
    </p>
    {formatNumber(args.value, {style: args.style, currencyDisplay: args.currency})}
  </div>
)

CurrencyDisplayName.args = {
  value: 100000,
  style: STYLE.currency,
  currency: CURRENCY_DISPLAY.name
}


export const CurrencyDisplayCode = (args) => (
  <div>
    <p>
      You can add currencyDisplay, to show currency code <br />
      Result:
    </p>
    {formatNumber(args.value, {style: args.style, currencyDisplay: args.currency})}
  </div>
)

CurrencyDisplayCode.args = {
  value: 100000,
  style: STYLE.currency,
  currency: CURRENCY_DISPLAY.code
}

export const MinimumFraction = (args) => (
  <div>
    <p>
      Override default fraction settings  <br />
      Result:
    </p>
    {formatNumber(args.value, {minimumFractionDigits: args.fractionDigit})}
  </div>
)

MinimumFraction.args = {
  value: 100000,
  fractionDigit: 2
}

export const MaximumFraction = (args) => (
  <div>
    <p>
      Override default fraction settings <br />
      Result:
    </p>
    {formatNumber(args.value, {maximumFractionDigits: args.fractionDigit})}
  </div>
)

MaximumFraction.args = {
  value: 1337.148,
  fractionDigit: 1
}

export const CompactFormatting = (args) => (
  <div>
    <p>
      Can compact numbers  <br />
      Result:
    </p>
    {formatNumber(args.value, {notation: args.notation})}
  </div>
)

CompactFormatting.args = {
  value: 100000,
  notation: "compact"
}

export const Percentage = (args) => (
  <div>
    <p>
      Percentage formatting. Remember it uses normalized values (0-1) <br />
      Result:
    </p>
    {formatNumber(args.value1, {style: args.style})} <br />
    {formatNumber(args.value2, {style: args.style})} <br />
    {formatNumber(args.value3, {style: args.style})}
  </div>
)

Percentage.args = {
  value1: 1,
  value2: 0.2,
  value3: 1.5,
  style: STYLE.percent
}
