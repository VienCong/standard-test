const baseRule = require('../rule/baseRule')
const baseConfig = require('./baseConfig');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', 
    'plugin:prettier/recommended', 
  ],
  plugins: ['react-hooks', '@typescript-eslint'],
  ...baseConfig,
  rules: {
    // 校验 hooks
    'react-hooks/rules-of-hooks': 2,
    // hooks 依赖校验告警
    'react-hooks/exhaustive-deps': 1,
    // 必须导入 React
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    ...baseRule,
  }
}