### Vanilla use
```jsx harmony
<Table>
{({value}) => (<td><h3>{value}</h3></td>)}
</Table>



```

### Render header
```js
<Table renderHeader={({item}) => (<th><i>{item.value}</i></th>)}>
{({value}) => (<td><h3>{value}</h3></td>)}
</Table>
```