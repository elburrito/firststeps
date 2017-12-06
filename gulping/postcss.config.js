module.exports = {
    plugins: [
          require('postcss-import')({ root: './src/css/*' }),
          require('precss'),
          require('postcss-cssnext'),
          require('postcss-write-svg')
    ]
}
