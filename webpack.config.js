// intellij alias
const path = require("path");
module.exports = {
  extensions: [".js", ".vue", ".json", ".jsx", ".ts", ".tsx"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
