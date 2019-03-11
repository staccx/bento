- Omit `to:` to define current level.
- Set Smule to `flex-grow: 1` for full width breadcrumb.
- Set `--max-width` to define the width of each Smule.
- `--sep-width`: The width of the pointy end of each Smule.
- `--distance`: The distance between each Smule.
- `--line-height`: Sets the height of the breadcrumbs and must be in px.

```jsx
<Breadcrumb
  path={[
    {
      name: "Home",
      to: "/"
    },
    {
      name: "Level 2",
      to: "/level-2"
    },
    {
      name: "Current page"
    },
   {
     name: "Last page",
     to: "/level-4"
   }
  ]}
/>
```
