
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import vue from 'rollup-plugin-vue';

export default {
  input: "src/main.jsx",
  output: {
    file: "dist/uvc.esm.js",
    format: "esm",
  },
  external: ['react', 'vue'],
  plugins: [
    babel({
      babelHelpers: "bundled",
    //   include: ["**/*.jsx"],
      exclude: 'node_modules/**', // 排除 node_modules
      presets: [
        // "@babel/preset-env",
        "@babel/preset-react",
        '@vue/babel-preset-jsx',
      ],
    }),
    commonjs(), // 转换 CommonJS 模块为 ES6 模块
    resolve(),
    terser({ compress: { drop_console: true } }),
    vue(), // 处理 Vue 文件
  ],
  sourceMap: true,
};
