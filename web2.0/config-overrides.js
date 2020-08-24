const {
  override,
  addWebpackAlias,
  addPostcssPlugins,
  addWebpackModuleRule,
} = require("customize-cra");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = override(
  addWebpackAlias({
    "@": resolve("src"),
    "@abi": resolve("src/abi"),
    "@component": resolve("src/component"),
    "@img": resolve("src/static/images"),
    "@language": resolve("src/static/language"),
    "@pages": resolve("src/pages"),
    "@logos": resolve("src/logos"),
    "@svgCom": resolve("src/component/SvgIcon"),
  }),
  addPostcssPlugins([
    require("postcss-import")({}),
    require("postcss-url")({}),
    require("postcss-aspect-ratio-mini")({}),
    require("postcss-write-svg")({
      uft8: false,
    }),
    require("postcss-preset-env")({}),
    require("postcss-px-to-viewport")({
      viewportWidth: 750,
      unitPrecision: 4,
      viewportUnit: "vw",
      selectorBlackList: [".ignore", ".hairlines", "pc"], // 不转换的类名
      minPixelValue: 1,
      mediaQuery: true,
      propList: ["*", "!letter-spacing"],
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    }),
    require("postcss-viewport-units")({}),
    require("cssnano")({
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false,
    }),
  ]),
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "sass-loader",
      },
      {
        loader: "sass-resources-loader",
        options: {
          resources: "./src/style/theme.scss",
        },
      },
    ],
  }),
  addWebpackModuleRule({
    test: /\.(eot|woff2?|ttf|svg)$/,
    exclude: path.resolve(__dirname, "./src/logos"),
    use: [
      {
        loader: "url-loader",
        options: {
          name: "[name]-[hash:5].min.[ext]",
          limit: 5000,
          outputPath: "./static/images",
          publicPath: "../../static/images",
        },
      },
    ],
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    loader: "svg-sprite-loader",
    include: path.resolve(__dirname, "./src/logos"),
    options: {
      symbolId: "[name]",
    },
  })
);
