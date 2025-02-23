import json from '@eslint/json';
import packageJson from 'eslint-plugin-package-json/configs/recommended';

export default [
  {
    files: ['**/*.json'],
    ignores: ['**/package.json', '**/package-lock.json'],
    language: 'json/json',
    ...json.configs.recommended,
    rules: {
      ...json.configs.recommended.rules,
      'json/sort-keys': 'error',
    },
  },
  packageJson,
];
