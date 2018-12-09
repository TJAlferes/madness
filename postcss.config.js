module.exports = {
  parser: 'postcss',
  plugins: [
    require('postcss-import'),
    require('precss'),
    require('autoprefixer')
  ]
};