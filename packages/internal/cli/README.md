# Bento cli

## Install
```javascript
yarn link
````

## Usage
### i18n
### Walking
```bash
bento i18n -p "projectId" -d "production" -w -l nb,en,fr
```
This will result create a json with a report of the walk

Example:
```json
[
  {
    "key": "bugskey",
    "suggestion": {
      "value": "Fallback Text",
      "key": "bugskey"
    },
    "status": "KEY_NOT_IN_DATASET"
  },
  {
    "key": "INVOICE",
    "status": "OK",
    "languages": {
      "nb": true,
      "en": true,
      "fr": false
    }
  },
  {
    "file": "./src/App.js",
    "line": 101,
    "status": "NO_KEY",
    "suggestion": {
      "value": null,
      "key": null
    }`
  },
  {
    "file": "./src/App.js",
    "line": 102,
    "status": "NO_KEY",
    "suggestion": {
      "value": "Just doing stuff",
      "key": "just-doing-stuff"
    }
  }
]
```

#### Coming
Save back into dataset missing keys.

### Saving
Pass the `s` and `f` options to save texts to file

```bash
bento -p "project" -d "dataset" -s -f "./src/i18n.json"
```

## Link
Use bento to symlink packages.

### Publish and push package
```bash
bento link
```
#### Options
Input
```
bento link -i "src/target.js" // defaults to src/exports.js
```
Watch
```
bento link -w
```
*Target*
If you want to *use* packages use the target param

*NOTE:* Assumes @staccx packages
```
bento link base i18n //will pad @staccx/ if you dont provide it
```

## Clean
```
bento clean
```
Executes the cleaning process inside bento. Will remove nodemodules, clean all packages and install deps
