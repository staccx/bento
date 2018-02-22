```jsx
const selectContent = [
  {
    text: "Valg 1",
    value: "1 000"
  },
  {
    text: "Valg 2",
    value: "10 000"
  },
  {
    text: "Valg 3",
    value: "100 000"
  }
]
;<div>
  <h3>Default select</h3>
  <Select
    onChange={selectedItem => console.log(selectedItem)}
    label={"Label"}
    selectedElement={CustomSelected}
    key={"iwodn21"}
    placeHolderLabel={"Velg…"}
  >
    {selectContent.map(item => (
      <CustomOptionElement key={item.text} data={item}>
        <h4>{item.text}</h4>
        <span>{item.value}</span>
      </CustomOptionElement>
    ))}
  </Select>

  <h3>Customized selectn</h3>
  <Select
    onChange={selectedItem => console.log(selectedItem)}
    label={"Label"}
    selectedElement={CustomSelected}
    optionsWrapperElement={CustomOptionsWrapperElement}
    placeHolderElement={CustomPlaceholder}
    placeHolderLabel={"Velg…"}
    key={"wkdfnas"}
  >
    {selectContent.map(item => (
      <CustomOptionElement key={item.text} data={item}>
        <h4>{item.text}</h4>
        <span>{item.value}</span>
      </CustomOptionElement>
    ))}
  </Select>
</div>
```
