const { resolve } = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: resolve(`${__dirname}/tsconfig.json`),
    extraFileExtensions: ['.scss'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
