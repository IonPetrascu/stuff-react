// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { esmodules: true, node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
