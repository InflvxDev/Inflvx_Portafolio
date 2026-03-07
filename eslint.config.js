import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  },
];
