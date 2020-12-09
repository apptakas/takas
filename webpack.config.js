
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: __dirname + "/src/public",
    filename: "js/bundle.js"
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/app/index.html",
    //   minify: {
    //     collapseWhitespace: true,
    //     removeComments: true,
    //     removeRedundantAttributes: true,
    //     removeScriptTypeAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     useShortDoctype: true
    //   }
    // }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-styles.css"
    })
  ],
  module: {
    rules: [
      {
        use: 'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              useRelativePath: true
            }
          }
        ]
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        }
      },
    ]
  }
};
