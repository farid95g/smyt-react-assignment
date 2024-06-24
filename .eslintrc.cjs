module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    indent: ['error', 2, { 'SwitchCase': 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single']
  }
}
