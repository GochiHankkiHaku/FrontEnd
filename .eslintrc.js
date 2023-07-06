module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-var': ['error'], // var 금지
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수에 warn
    'react/react-in-jsx-scope': 'off',

    'react/prop-types': 'off',
  },
};
