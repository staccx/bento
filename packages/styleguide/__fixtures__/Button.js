import {Button} from "@staccx/base"

export default [
  {
    component: Button,
    themed: false,
    name: "No theme",
    props: {
      children: "Click me",
      onClick: value => console.log(`Select: ${value}`)
    }
  },
  {
    component: Button,
    themed: true,
    name: "Standard",
    props: {
      children: "Ordinary",
      onClick: value => console.log(`Select: ${value}`)
    }
  },
  {
    component: Button,
    themed: true,
    name: "Variant",
    props: {
      children: "Variant",
      variant: "subtle",
      onClick: value => console.log(`Select: ${value}`)
    }
  }
]
