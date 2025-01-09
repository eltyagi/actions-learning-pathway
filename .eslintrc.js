module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  },
  "linterOptions": {
    "reportUnusedDisableDirectives": true
  }
};