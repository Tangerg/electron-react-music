module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        'no-console': 'off',
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        "no-plusplus": "off",
        'jsx-a11y/click-events-have-key-events': "off",
        'jsx-a11y/no-noninteractive-element-interactions': "off",
        'jsx-a11y/no-static-element-interactions': "off",
        'react/jsx-props-no-spreading': "off"

    }
};
