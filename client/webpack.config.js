const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { title } = require('process');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      editor: './src/js/editor.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugn({
        template: "./index.html",
        title: "J.A.T.E"
      }),
      new InjectManifest({
        swSrc: "./src-sw.js"
      }),
      new WebpackPwaManifest({
        inject: true,
        name: "Just Another Text Editor",
        short_name: "JATE",
        fingerprints: false,
        description: "Just another text editor",
        them_color: "#235ca3",
        background_color: "#235ca3",
        publicPath: "/",
        start_url: "/",
        icons: [{
          src: path.resolve("../src/image/logi.png"),
          size: [96, 128,192,256,256,384,512],
          destination: path.join("assets", "icons"),
        }]
      })
    ],

    module: {
      rules: [{
      test: /\.css$/i,
      use: ["style-loader",
       "css-loader"],
      

      },
      {
        test: /\.m?js$/,
        use:{
          loder: "babel-loder",
          presets: ["babel/preser-env"],
          plugins:[
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/transform-runtime",
          ],
        }
      }
      ],
    },
    // {
    //   test: /\.m?js$/,

    // }
  };
};
module.exports = {
  node:'development',
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: 'bundel.js',
    path: path.resolve(__dirname, 'dist')
  }
}
