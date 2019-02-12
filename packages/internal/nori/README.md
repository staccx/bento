# Sanity React Declarative Components

## Components

### Sanity-Provider
This is imperative to the others. Without it there is no data
Use it as any other context provider

```javascript
import {SanityProvider} from "@staccx/sanity"

...

<SanityProvider dataset={"nameofdataset"} projectId={"alkfla"}>
    Your lovely UI
</SanityProvider>

```

### Sanity-List
This is for a list of a single type.
It has optional props for filter, count and picks
It produces a render function
Requires a id (could be anything, but keep it unique)

```javascript
<SanityList type={"myType"} count={10} id="my-list-of-stuff">
{({result}) => {
    if(result) {
        return renderMyList(result)
    }
    return <div>Loading...</div>
}
}

</SanityList>

```


### Sanity-Document

Fetches single document and serves it in a lovely render function

```javascript
<SanityDocument id={"someid"}>
{({document}) => {
    if(document) {
    return renderMyDocument(document)
    }
    return null
}}
</SanityDocument>
```


### Sanity-Query

For all needs not meet by ☝️ Takes a GROQ query. Have at it.

```javascript
<SanityQuery id={"someid"} query={"*[_type == 'myType']{...}"}>
{({result}) => {
    if(result) {
        return renderMyList(result)
    }
    return <div>Loading...</div>
}
}
</SanityDocument>
```

### Combine!

```javascript
<SanityList type={"myType"} count={10} id="my-list-of-stuff">
{({result}) => {
    if(result) {
        return result.map(item => (
        <SanityDocument id={item._id}>
        {({document}) => {
            if(document) {
            return renderMyDocument(document)
            }
            return null
        }}
        </SanityDocument>
        ))
    }
    return <div>Loading...</div>
}
}

</SanityList>

```