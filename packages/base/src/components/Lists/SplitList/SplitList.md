SplitList and SplitListItem

```jsx harmony
const myList = [
  {
    myUniqueId: "221e98j",
    myLeftProp: "Amount",
    myRightProp: 500
  },
  {
    myUniqueId: "ads31",
    myLeftProp: "Amount",
    myRightProp: 1500
  },
  {
    myUniqueId: "h14",
    myLeftProp: "Has three children!",
    myRightProp: "500",
    myThirdProp: "1 500"
  }
];

<SplitList>
  {myList.map(listItem => (
    <SplitListItem key={listItem.myUniqueId}>
      {listItem.myLeftProp}
      {listItem.myRightProp}
      {listItem.myThirdProp ? listItem.myThirdProp : null}
    </SplitListItem>
  ))}
</SplitList>
```
