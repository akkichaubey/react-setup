{
  "env": {
      "browser": true,
      "es6": true,
      "jest": true
  },
  "settings": {
      "react": {
        "version": "detect"
      }
    },
  "parser": "babel-eslint",
  "extends": [
      "airbnb",
      "plugin:import/errors",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-hooks",
      "import",
      "jsx-a11y"
  ],
  "rules": {
      "react/jsx-filename-extension": [
          1,
          {
            "extensions": [
              ".js",
              ".jsx"
            ]
          }
      ],
      "jsx-a11y/label-has-for": [
          "error",
          {
              "required": {
                  "some": [
                      "nesting",
                      "id"
                  ]
              }
          }
      ],
      "jsx-a11y/label-has-associated-control": [
          "error",
          {
              "assert": "either"
          }
      ],
      "linebreak-style": [
          "error", "windows"
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "error",
          "always"
      ],
      "react/prop-types": [
          "off"
      ],
      "no-console": [
          "off"
      ],
      "no-nested-ternary": [
          "off"
      ],
      "jsx-a11y/no-noninteractive-element-interactions": [
          "off"
      ],
      "jsx-a11y/click-events-have-key-events": [
          "off"
      ],
      "react/jsx-boolean-value": [
          "off"
      ],
      "no-param-reassign": [
          "off"
      ],
      "no-return-assign": [
          "off"
      ],
      "react-hooks/rules-of-hooks": "error",
      "react/no-array-index-key": "off",
      "react/display-name": [
          "off"
      ],
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-props-no-spreading": "off"
  }
}
