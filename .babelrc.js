module.exports = (api) => {
  const mode = process.env.NODE_ENV === "production";

  api.cache.using(() => mode);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: ["babel-plugin-styled-components"],
  };
};
