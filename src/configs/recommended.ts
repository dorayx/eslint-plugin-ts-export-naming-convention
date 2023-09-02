const rules = {
  // @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: ['PascalCase'],
      modifiers: ['exported'],
      prefix: ['I'],
    },
    {
      selector: 'typeAlias',
      format: ['PascalCase'],
      modifiers: ['exported'],
      prefix: ['T'],
    },
  ],
};

export { rules };
