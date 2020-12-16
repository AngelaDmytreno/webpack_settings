const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        }
      }),
      new TerserWebpackPlugin()
    ]
  }
  return config;
};
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: ''
      }
    },
    'css-loader'
  ];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const pluginsSet = () => {
  const plugins = [
    new HTMLWebpackPlugin({ template: './index.html' }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.png'),
        to: path.resolve(__dirname, 'dist'),
      }]
    }),
    new MiniCssExtractPlugin({ filename: filename('css') })
  ]
  if (isDev) { plugins.push(new HotModuleReplacementPlugin()); }
  return plugins;
}


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log('IS DEV:', isDev);
console.log('IS PROD:', isProd);


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    stat: './statistics.js'
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.jsx'],

    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@model': path.resolve(__dirname, 'src/model'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },

  optimization: optimization(),

  devServer: {
    port: 4200,
    hot: isDev,
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true
  },
  plugins: pluginsSet(),

  // plugins: [
  //   new HTMLWebpackPlugin({
  //     template: './index.html'
  //   }),
  //   new CleanWebpackPlugin(),
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       {
  //         from: path.resolve(__dirname, 'src/favicon.png'),
  //         to: path.resolve(__dirname, 'dist'),
  //       }
  //     ]
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: filename('css')
  //   }),
  //   new HotModuleReplacementPlugin(),
  // ],
  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  }

};




