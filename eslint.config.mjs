import eslint from '@eslint/js';
import mm from '@maxmilton/eslint-config';
import unicorn from 'eslint-plugin-unicorn';
import ts from 'typescript-eslint';

const OFF = 0;
// const WARN = 1;
const ERROR = 2;

export default ts.config(
  eslint.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  unicorn.configs['flat/recommended'],
  mm.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: ERROR,
    },
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
        projectService: {
          allowDefaultProject: ['*.js', '*.cjs', '*.mjs'],
          // defaultProject: './tsconfig.node.json',
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // FIXME: Remove this once fixed upstream (incorrectly reports chrome as deprecated).
      '@typescript-eslint/no-deprecated': OFF,

      /* Performance and byte savings */
      // alternatives offer byte savings and better performance
      '@typescript-eslint/prefer-string-starts-ends-with': OFF,
      // byte savings (but reduces debugging ability)
      '@typescript-eslint/restrict-plus-operands': OFF,
      // byte savings (but reduces debugging ability)
      '@typescript-eslint/restrict-template-expressions': OFF,
      // byte savings with same performance
      'prefer-template': OFF,
      // byte savings
      'no-plusplus': OFF,
      // byte savings + faster
      'unicorn/explicit-length-check': OFF,
      'unicorn/no-array-callback-reference': OFF,
      // forEach is slower but more compact (for non-performance-critical code)
      'unicorn/no-array-for-each': OFF,
      'unicorn/no-await-expression-member': OFF,
      // indexOf is faster (in Chrome)
      'unicorn/prefer-includes': OFF,
      // saves 3 bytes to use arrow function
      'unicorn/prefer-native-coercion-functions': OFF,
      // byte savings (minification doesn't currently automatically remove)
      'unicorn/switch-case-braces': [ERROR, 'avoid'],

      // prefer to clearly separate Bun and DOM
      'unicorn/prefer-global-this': OFF,

      /* stage1 */
      // underscores in synthetic event handler names
      'no-underscore-dangle': OFF,
      'unicorn/prefer-add-event-listener': OFF,
      'unicorn/prefer-dom-node-append': OFF,
      'unicorn/prefer-query-selector': OFF,
    },
  },
  {
    files: ['build.ts'],
    rules: {
      'no-await-in-loop': OFF,
      'no-console': OFF,
    },
  },
  {
    ignores: ['**/*.bak', 'coverage/**', 'dist/**'],
  },
);
