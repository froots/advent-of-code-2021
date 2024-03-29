module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {},
};
