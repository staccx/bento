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
  <h3>Select</h3>
  <p>
    Both selectedItem and the option component should be supplied. Can also
    supply your own optionsWrapperElement and placeHolderElement and caret.
  </p>
  <Select
    onChange={selectedItem => console.log(selectedItem)}
    label={"Label"}
    selectedElement={SelectSelected}
    key={"iwodn21"}
    placeHolderLabel={"Velg…"}
  >
    {selectContent.map(item => (
      <SelectOption key={item.text} data={item}>
        <strong>{item.text}</strong>
        <br />
        <span>{item.value}</span>
      </SelectOption>
    ))}
  </Select>
</div>
```
