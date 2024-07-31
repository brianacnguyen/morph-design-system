module.exports = {
  root: true,

  extends: ['@metamask/eslint-config', 'plugin:storybook/recommended'],

  env: {
    browser: true,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@metamask/eslint-config-typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
    },

    {
      files: ['*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      extends: ['@metamask/eslint-config-nodejs'],
    },

    {
      files: ['yarn.config.cjs'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2020,
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
      extends: ['@metamask/eslint-config-nodejs'],
    },

    {
      files: ['*.test.ts', '*.test.js'],
      extends: [
        '@metamask/eslint-config-jest',
        '@metamask/eslint-config-nodejs',
      ],
    },
  ],

  ignorePatterns: [
    '!.eslintrc.js',
    '!.prettierrc.js',
    'dist/',
    'docs/',
    '.yarn/',
  ],

  rules: {
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css'],
      },
    ],
    'no-restricted-globals': 'off',
  },
};
