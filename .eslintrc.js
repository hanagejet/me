module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    'react/prop-types': 'ignore',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
