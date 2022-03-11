module.exports = {
  root: true,
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-ordering': 0,
    'default-case': 2,
    'guard-for-in': 2,
    'no-eval': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'require-await': 2,
  },
};
