## How to yalc
### Install
`yarn global add yalc`

### Use
`yalc push`

combine this with a simple call to build

`yarn build && yalc push`

and you have shortened the loop

### Link
`yalc link` 👈 in the package you want to link

`yalc link <package-name>` 👈 in the package you want to use the package


this links and will cause hot-reloading to rebuild if a linked package is linked

### Before pushing
REMEMBER: yalc is only local

If changes have been made to linked packages you must actually publish those packages before pushing to get the new code on deployed server

### Release new packages
if(bento)

`bento release`

### Remove yalc packages
`yalc remove –all`

remove all linked packages.

we then have to “reyarn”.

`rm -rf node_modules && rm yarn.lock && yarn`

### Install fresh packages
`yarn upgrade-interactive —latest`

THEN you can push your code

