module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['html', 'prettier', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
