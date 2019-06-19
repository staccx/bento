- Last level will always be _current_ level ('to'-prop can be omitted).
- Key properties are controlled with custom CSS properties assigned to main parent element.

```jsx
<Breadcrumb
  path={[
    {
      name: "First level",
      to: "/"
    },
    {
      name: "Second level",
      to: "/level-2"
    },
    {
      name: "Third level",
      to: "/level-3"
    },
    {
      name: "Fourth level"
    }
  ]}
/>
```
