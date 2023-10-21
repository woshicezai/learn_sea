import { printMyName } from "./module-b.js";

export const printMyName2 = () => {
  console.log("My name is: " + printMyName());
};
