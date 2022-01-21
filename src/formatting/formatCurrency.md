;```
examples:

<CurrencyText>{formatCurrency(1000)}</CurrencyText>
<CurrencyText>{formatCurrency(1000, { symbol: "$" })}</CurrencyText>
<CurrencyText>
      {formatCurrency(1000, { symbol: "$", format: "$s  $v" })}
    </CurrencyText>
<CurrencyText>
          {formatCurrency(100000, {
            symbol: "kr",
            format: "$s  $v",
            suffix: ",-"
          })}
        </CurrencyText>

```
