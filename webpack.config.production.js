const TerserPlugin = require('terser-webpack-plugin')
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin')
/* eslint-disable */

var path = require('path')
var webpack = require('webpack')
var googleFonts = require('./google-fonts.json')

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './index'],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(/\.\/canvas.js/),
    new GoogleFontsPlugin({
      fonts: googleFonts
      /* ...options */
    })
  ],

  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',

            options: {
              gfm: false
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              mimetype: 'image/svg+xml'
            }
          }
        ],
        include: path.join(__dirname, 'assets')
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader'],
        include: path.join(__dirname, 'assets')
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.js', '.jsx', '.json']
  },
  optimization: {
    minimize: true,

    minimizer: [new TerserPlugin()]
  }
}
