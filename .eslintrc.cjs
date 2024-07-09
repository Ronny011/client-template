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
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'react/jsx-no-target-blank': 'off'
    // not needed as prettier always removes it, so we avoid error overload
    // 'comma-dangle': [
    //   'error',
    //   {
    //     arrays: 'never',
    //     exports: 'never',
    //     functions: 'never',
    //     imports: 'never',
    //     objects: 'never'
    //   }
    // ]
  }
};
