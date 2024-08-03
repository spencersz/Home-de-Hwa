const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    publicPath: '/',
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3030,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/dist'),

    },
    proxy: [{
      '/api/**': {
          target: 'http://localhost:3030', 
          router: () => 'http://localhost:3000',
      }
  }]
    // port: 3030, // you can change the port,
    // hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader", 
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      },
      {
        test: /\.(png|jpeg|jpg|JPEG|gif)$/i,
        use: {loader: 'file-loader'}
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};