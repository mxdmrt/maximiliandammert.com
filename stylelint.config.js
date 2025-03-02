export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['dist'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
};
