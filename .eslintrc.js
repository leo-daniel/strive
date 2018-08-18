module.exports = {
    "extends": "airbnb-base"
};

module.exports = {
  // config source: https://github.com/neciu/eslint-config-last

  "env": {
    "node": 1,
    "browser": 1
  },
  extends: ['eslint:recommended', 'prettier'], // extending recommended config and config derived from eslint-config-prettier
  plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
  rules: {
    'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules
  },
};

{
  "env": {
    "node": 1,
    "browser": 1
  },
  "globals": {
    "exampleGlobalVariable": true
  },
  "rules": {
    "eqeqeq": 1
  },
  "plugins": []
}