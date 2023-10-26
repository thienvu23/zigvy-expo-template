const path = require('path');
console.log("__dirname", __dirname);
module.exports = {
  env: {
    es2021: true,
  },
  globals: {
    __DEV__: 'readonly',
    toast: 'readonly',
    PopupConfirmDefaultOption: 'readonly',
    GlobalToastType: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        '@typescript-eslint/no-unused-vars': 1,
        'no-console': ['error', { allow: ['error', 'info', 'group', 'groupEnd', 'groupCollapsed'] }],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'arrow-parens': 0,
        'consistent-return': 1,
        'lines-between-class-members': ['error', 'always'],
        'no-empty-function': 0,
        '@typescript-eslint/no-unsafe-call': 0, // Cannot import module
        'new-cap': ['error', { properties: false, capIsNew: false }],
        '@typescript-eslint/no-unsafe-return': 0, // Return from styled component,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-argument': 1,
        'no-underscore-dangle': 0,
        'no-case-declarations': 0,
        'react-hooks/exhaustive-deps': ['error'],
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: false,
          },
        ],
        'object-shorthand': ['error', 'always'],
        'no-restricted-imports': ['error', 'lodash', 'beautiful-react-hooks'],
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: false }],
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowAny: true }],
        '@typescript-eslint/no-misused-promises': [
          2,
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
      },
    },
  ],
};
