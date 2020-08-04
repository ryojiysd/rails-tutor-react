module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "env": { "node": true, "es6": true },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
      },
      "sourceType": "module",
      "project": "./tsconfig.json"
    },
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "printWidth": 120,
                "tabWidth": 2,
                "useTabs": false,
                "semi": true,
                "singleuote": true
            }
        ]
    }
};
