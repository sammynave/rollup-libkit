import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sucrase from "@rollup/plugin-sucrase";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: `${pkg.main}.js`, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [
      sucrase({
        exclude: ["node_modules/**"],
        transforms: ["typescript"],
      }),
      resolve(),
      commonjs(),
    ],
  },
];
