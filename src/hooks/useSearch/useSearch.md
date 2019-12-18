# useSearch
Hooks used to filter arrays by a search term

Use this hooks when you want to add search functionality to your data

## How to use

useSearch has two modus operandi

### Mode 1
```
const [result] = useSearch({input: "search term", documents: myListOfData, keys: ["fieldIWantToSearch"])
```

This should be used when the search term is held locally by your components.

### Mode 2
```
const [result, search] = useSearch({documents, keys})
...
<Input onChange={search} />
```

Here we also deconstruct the second element returned from useSearch which is the `search` function
This is the same function that useSearch uses if you pass it a input and will yield the same result
Use this when you dont want to keep local state, or if you want to fire search from another event i.e button clicks or change handlers

## Props

|  name 	| type  	| defaultValue  	| required |
|---	|---	|---	|---	|
|  input 	| string  	|  undefined 	|  no 	|
|  documents 	|  array 	|  [ ] 	|  yes 	|
|  keys 	|  array of strings 	|  [] 	|  yes 	|
|  fuseProps 	| [Fuse.js docs](https://fusejs.io/)|  see table below 	|  no 	|

### Fuse default props
```
 {
  shouldSort: true,
  threshold: 0.3,
  matchAllTokens: true,
  tokenize: true,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2
}
```
