const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',  // Your entry point file
  output: {
    filename: 'bundle.js',  // This is where bundle.js gets generated
    path: path.resolve(__dirname, 'dist'),  // Output directory for the build
    clean: true,  // Cleans the output directory before each build
  },
  devServer: {
    static: './dist',  // Serve the files from the "dist" directory
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Path to your HTML template
    }),
  ],
};
