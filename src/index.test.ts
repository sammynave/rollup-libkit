import test from "ava";

import { greeting } from "./index";

test("greeting works", (t) => {
  t.is(greeting("cat"), "hello, cat");
});
