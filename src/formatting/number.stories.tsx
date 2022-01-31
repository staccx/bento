import { formatNumber } from "./number"
import { CURRENCY_DISPLAY, STYLE } from "./number.constants"

export default {
  title: "formatting/Format number",
  component: formatNumber,
  parameters: {
    jest: ["number.test.ts"]
  }
}

export const Default = ({ value }) => (
  <div>
    <p>
      Uses Norwegian locales by default <br />
      Result:
    </p>
    {formatNumber(value)}
  </div>
)

Default.args = {
  value: 100000
}

export const ChangeLocale = ({ value, locale }) => (
  <div>
    <p>
      Easily change locale, in this instance the locale is "en" <br />
      Result:
    </p>
    {formatNumber(value, { locale })}
  </div>
)

ChangeLocale.args = {
  value: 100000,
  locale: "en"
}

export const Currency = ({ value, style }) => (
  <div>
    <p>
      You can use it to do money formatting (NOTE: this also has its own
      function `formatMoney`) <br />
      Result:
    </p>
    {formatNumber(value, { style })}
  </div>
)

Currency.args = {
  value: 100000,
  style: STYLE.currency
}

export const Suffix = ({ value, style, suffix }) => (
  <div>
    <p>
      This can be used for any style. but if you want a unit you should use
      Units <br />
      Result:
    </p>
    {formatNumber(value, { style, suffix })}
  </div>
)

Currency.args = {
  value: 100000,
  style: STYLE.currency,
  suffix: ".-"
}

export const CurrencyDisplayName = ({ value, style, currency }) => (
  <div>
    <p>
      You can add currencyDisplay, to show currency name <br />
      Result:
    </p>
    {formatNumber(value, {
      style,
      currencyDisplay: currency
    })}
  </div>
)

CurrencyDisplayName.args = {
  value: 100000,
  style: STYLE.currency,
  currency: CURRENCY_DISPLAY.name
}

export const CurrencyDisplayCode = ({ value, style, currency }) => (
  <div>
    <p>
      You can add currencyDisplay, to show currency code <br />
      Result:
    </p>
    {formatNumber(value, {
      style,
      currencyDisplay: currency
    })}
  </div>
)

CurrencyDisplayCode.args = {
  value: 100000,
  style: STYLE.currency,
  currency: CURRENCY_DISPLAY.code
}

export const MinimumFraction = ({ value, fractionDigit }) => (
  <div>
    <p>
      Override default fraction settings <br />
      Result:
    </p>
    {formatNumber(value, { minimumFractionDigits: fractionDigit })}
  </div>
)

MinimumFraction.args = {
  value: 100000,
  fractionDigit: 2
}

export const MaximumFraction = ({ value, fractionDigit }) => (
  <div>
    <p>
      Override default fraction settings <br />
      Result:
    </p>
    {formatNumber(value, { maximumFractionDigits: fractionDigit })}
  </div>
)

MaximumFraction.args = {
  value: 1337.148,
  fractionDigit: 1
}

export const CompactFormatting = ({ value, notation }) => (
  <div>
    <p>
      Can compact numbers <br />
      Result:
    </p>
    {formatNumber(value, { notation })}
  </div>
)

CompactFormatting.args = {
  value: 100000,
  notation: "compact"
}

export const Percentage = ({ value1, value2, value3, style }) => (
  <div>
    <p>
      Percentage formatting. Remember it uses normalized values (0-1) <br />
      Result:
    </p>
    {formatNumber(value1, { style })} <br />
    {formatNumber(value2, { style })} <br />
    {formatNumber(value3, { style })}
  </div>
)

Percentage.args = {
  value1: 1,
  value2: 0.2,
  value3: 1.5,
  style: STYLE.percent
}
