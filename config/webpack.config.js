import path from 'path'
import HtmlPlugin from 'html-webpack-plugin'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const basePath = path.join(__dirname, '..', 'src')
const env = process.env.NODE_ENV || 'development'

console.log('Webpack running in ' + env)

export default {
  entry: {
    main: path.join(basePath, 'index.jsx'),
  },

  output: {
    path: path.join(basePath, '..', 'build'),
    publicPath: env === 'development' ? '/' : '',
    filename: '[name].js',
  },

  
  plugins: [
    new HtmlPlugin({
      title: 'Preact minimal',
      template: path.join(basePath, 'index.html'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            ["@babel/plugin-transform-runtime"],
            [
              "@babel/plugin-transform-react-jsx",
              {
                pragma: "h",
                pragmaFrag: "Fragment",
              },
            ],
          ]
        }
      },
      {
        test: /\.css$/i,
        
        use: [  
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader"
          ],
         
      },
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
    ]
  },

  devServer: {
    noInfo: true,
    port: 4000,
    contentBase: path.join(basePath, 'build'),
  },
}
