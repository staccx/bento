import getProp from "./getProp";

const spacing = size => getProp("spacing", size);

spacing.micro = () => getProp("spacing", "micro");
spacing.tiny = () => getProp("spacing", "tiny");
spacing.small = () => getProp("spacing", "small");
spacing.medium = () => getProp("spacing", "medium");
spacing.mediumPlus = () => getProp("spacing", "mediumPlus");
spacing.large = () => getProp("spacing", "large");
spacing.huge = () => getProp("spacing", "huge");

export default spacing;
