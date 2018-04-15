import deepfind from "./deepfind";

export default (name, type = "size") => ({ theme }) => {
  const deep = ["font", type, name].join(".");
  if (!deepfind(theme, deep)) {
    console.warn("Could not find font", deep, theme);
    return null;
  }
  return theme.font[type][name];
};
