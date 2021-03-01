import TextElastic from "./TextElastic"

export default {
  title: "effects/TextElastic",
  component: TextElastic
}

export const Standard = args => <TextElastic {...args} />

Standard.args = {
  duration: 1500,
  elasticity: 500,
  delayBetween: 50,
  children: "This text will be bumpy"
}
