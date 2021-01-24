const path = require('path');

module.exports = {
  mode: 'development',
  entry: './scripts.js',
  output: {
    filename: 'assets/js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};