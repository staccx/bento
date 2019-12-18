### Normal

No selected? First will be selected

```jsx
<Select
  items={["apple", "orange", "carrot", "organic cauliflower from spain"]}
  onChange={() => null}
  label={"Fruit"}
/>
```

With placeholder null option

```jsx
<Select
  items={["apple", "orange", "carrot", "organic cauliflower from spain"]}
  onChange={() => null}
  label={"Fruit"}
  placeHolderLabel="Velg…"
/>
```

Need default selected?

```jsx
<Select
  items={["apple", "orange", "carrot"]}
  onChange={() => null}
  label={"Fruit"}
  selectedItem="orange"
/>
```

### Combobox

```jsx
<Select
  items={["apple", "orange", "carrot"]}
  onChange={() => null}
  label={"Fruit"}
  combobox
/>
```

### Renderprops

#### Default render prop (children)

Template for rendering items in list

```jsx
<Select
  items={["apple", "orange", "carrot"]}
  onChange={() => null}
  label={"Fruit"}
>
  {({ item, getItemProps, highlighted, selected }) => (
    <div {...getItemProps({ item })}>{item}</div>
  )}
</Select>
```

#### RenderSelected

```jsx
<Select
  items={["apple", "orange", "carrot"]}
  onChange={() => null}
  label={"Fruit"}
  renderSelected={({
    selectedItem,
    toggleMenu,
    getButtonProps,
    getInputProps
  }) => {
    return <Button>{selectedItem}</Button>
  }}
/>
```

#### itemToString & itemToKey

Complex object structure?

```jsx
<Select
  items={[
    { data: { name: "apple" }, id: "2" },
    { data: { name: "orange" }, id: "3" },
    { data: { name: "carrot" }, id: "4" }
  ]}
  onChange={() => null}
  label={"Map selected"}
  itemToString={item => item.data.name}
  itemToKey={item => item.id}
/>
```

Complex object structure with placeholder?

```jsx
<Select
  placeHolderLabel="Velg…"
  items={[
    { data: { name: "apple" }, id: "2" },
    { data: { name: "orange" }, id: "3" },
    { data: { name: "carrot" }, id: "4" }
  ]}
  onChange={() => null}
  label={"Map selected"}
  itemToString={item => item.data.name}
  itemToKey={item => item.id}
/>
```
