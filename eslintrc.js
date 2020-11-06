module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    brower: true
  },
  plugins: ['vue'],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always'
    }]
  }
}
