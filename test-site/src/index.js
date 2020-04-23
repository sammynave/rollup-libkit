import { greeting } from "rollup-libkit";

const hi = document.createElement("div");

// eslint-disable-next-line
hi.textContent = greeting("guy");
// eslint-disable-next-line
document.body.append(hi);
