The pack object simply causes any number of elements pack up horizontally to automatically fill an equal, fluid width of their parent.

### Top-aligned

```jsx
<Pack>
  <PackItem>Lån</PackItem>
  <PackItem>Kreditt</PackItem>
  <PackItem>Sparing</PackItem>
  <PackItem>Om denne banken</PackItem>
  <PackItem>Kontakt</PackItem>
</Pack>
```

### Middle-aligned and noWrapped

```jsx
<Pack middle noWrap>
  <PackItem>Lån</PackItem>
  <PackItem>Kreditt</PackItem>
  <PackItem>Sparing</PackItem>
  <PackItem>Om denne banken</PackItem>
  <PackItem>Kontakt</PackItem>
</Pack>
```

### Bottom-aligned

Bottom, middle and justify flex-start

```jsx
<Pack bottom middle justify={"flex-start"}>
  <PackItem>Lån</PackItem>
  <PackItem>Kreditt</PackItem>
  <PackItem>Sparing</PackItem>
  <PackItem>Om denne banken</PackItem>
  <PackItem>Kontakt</PackItem>
</Pack>
```
