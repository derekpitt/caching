import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';

export default {
  entry: "src/index.ts",
  dest: "dist/index.js",
  plugins: [
    typescript(),
    babel()
  ]
}

