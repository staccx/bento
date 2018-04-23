import deepfind from "./deepfind";

const font = (name, type = "size") => ({ theme }) => {
  const deep = ["font", type, name].join(".");
  if (!deepfind(theme, deep)) {
    console.warn("Could not find font", deep, theme);
    return null;
  }
  return theme.font[type][name];
};

font.h1 = () => font("h1")
font.h2 = () => font("h2")
font.h3 = () => font("h3")
font.h4 = () => font("h4")
font.h5 = () => font("h5")
font.h6 = () => font("h6")
font.base = () => font("base")
font.tiny = () => font("tiny")
font.input = () => font("input")
font.huge = () => font("huge")

export default font