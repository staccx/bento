import deepfind from "./deepfind";

export default (prop, field) => ({ theme }) => {
  if (!deepfind(theme, [prop, field].join("."))) {
    console.warn("Could not find ", prop, field);
    return null;
  }
  return theme[prop][field];
};
