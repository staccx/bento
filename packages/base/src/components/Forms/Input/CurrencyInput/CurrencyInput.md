```jsx harmony
<CurrencyInput value={12341234}/>
```

```jsx harmony
<CurrencyInput value={12341234} prefix={'kr '} suffix={',-'}/>
```

```jsx harmony
<CurrencyInput value={12341234} prefix={'kr '} suffix={',-'} thousandsSeparatorSymbol={'.'}/>
```

```jsx harmony
<CurrencyInput value={1234.01} requireDecimal={true}/>
```

```jsx harmony
<div>
    <CurrencyInput value={1234.01} suffix={' EUR'}/>
    <CurrencyInput value={1234.01} prefix={'€'} suffix={''}/>
</div>
```