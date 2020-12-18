import { contents } from "./contents";
const staticValues = contents["en"];

const ___ = ((text) => {
  return staticValues[text];
})

export default ___;