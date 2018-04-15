import deepfind from "./deepfind";

export default (prop, field) => ({ theme }) => {

  if(prop === "color") {
    console.log(prop, field)
  }
  if (!deepfind(theme, [prop, field].join("."))) {
    console.warn("Could not find ", prop, field);
    return null;
  }
  const value = theme[prop][field]
  console.log(value)
  return value
};
