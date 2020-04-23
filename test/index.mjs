import { greeting } from "../dist/index.mjs";

function test() {
  return greeting("cat") === "hello, cat";
}

console.log(`the test ${test() ? "passed" : "failed"}`);
