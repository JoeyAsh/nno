module.exports = {
    root: true, // So parent files don't get applied
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'plugin:eslint-plugin-import/recommended',
        'plugin:eslint-plugin-import/typescript',
        'eslint-config-airbnb-typescript',
        'eslint-config-prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 7,
    },
    plugins: ['eslint-plugin-react-hooks', '@typescript-eslint/eslint-plugin'],
    rules: {
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'consistent-this': ['error', 'self'],
        'react/button-has-type': 'off',
        curly: ['error', 'all'],
        // Just as bad as "max components per file"
        'max-classes-per-file': 'off',
        // Too interruptive
        'no-alert': 'error',
        // Stylistic opinion
        'arrow-body-style': 'off',
        // Allow warn and error for dev environments
        'no-console': ['error', {allow: ['warn', 'error']}],
        'no-param-reassign': 'off', // It's fine.
        // Airbnb use warn https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L97
        // but eslint recommands error
        'func-names': 'error',
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    '@nno/*/*/*',
                    // Begin block: Packages with files instead of packages in the top level
                    // Importing from the top level pulls in CommonJS instead of ES modules
                    // Allowing /icons as to reduce cold-start of dev builds significantly.
                    // There's nothing to tree-shake when importing from /icons this way:
                ],
            },
        ],
        'no-constant-condition': 'error',
        // Use the proptype inheritance chain
        'no-prototype-builtins': 'off',
        'no-underscore-dangle': 'error',
        'nonblock-statement-body-position': 'error',
        'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
        // Destructuring harm grep potential.
        'prefer-destructuring': 'off',

        // disabled type-aware linting due to performance considerations
        '@typescript-eslint/dot-notation': 'off',
        'dot-notation': 'error',
        // disabled type-aware linting due to performance considerations
        '@typescript-eslint/no-implied-eval': 'off',
        'no-implied-eval': 'error',
        // disabled type-aware linting due to performance considerations
        '@typescript-eslint/no-throw-literal': 'off',
        'no-throw-literal': 'error',
        // disabled type-aware linting due to performance considerations
        '@typescript-eslint/return-await': 'off',
        'no-return-await': 'error',

        // Not sure why it doesn't work
        'import/named': 'off',
        // Missing yarn workspace support
        'import/no-extraneous-dependencies': 'off',
        // The code is already coupled to webpack. Prefer explicit coupling.
        'import/no-webpack-loader-syntax': 'off',

        // doesn't work?
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                // airbnb uses 'both' which requires nesting i.e. <label><input /></label>
                // 'either' allows `htmlFor`
                assert: 'either',
            },
        ],
        // We are a library, we need to support it too
        'jsx-a11y/no-autofocus': 'off',

        'react-hooks/exhaustive-deps': [
            'error',
            {additionalHooks: 'useEnhancedEffect'},
        ],
        'react-hooks/rules-of-hooks': 'error',

        'react/default-props-match-prop-types': [
            'error',
            {
                // Otherwise the rule thinks inner props = outer props
                // But in TypeScript we want to know that a certain prop is defined during render
                // while it can be ommitted from the callsite.
                // Then defaultProps (or default values) will make sure that the prop is defined during render
                allowRequiredDefaults: true,
            },
        ],
        // Can add verbosity to small functions making them harder to grok.
        // Though we have to manually enforce it for function components with default values.
        'react/destructuring-assignment': 'off',
        'react/forbid-prop-types': 'off', // Too strict, no time for that
        'react/jsx-curly-brace-presence': 'off', // broken
        // airbnb is using .jsx
        'react/jsx-filename-extension': [
            'error',
            {extensions: ['.js', '.tsx']},
        ],
        // Prefer <React.Fragment> over <>.
        'react/jsx-fragments': 'off',
        // Enforces premature optimization
        'react/jsx-no-bind': 'off',
        // We are a UI library.
        'react/jsx-props-no-spreading': 'off',
        // This rule is great for raising people awareness of what a key is and how it works.
        'react/no-array-index-key': 'off',
        'react/no-danger': 'error',
        'react/no-direct-mutation-state': 'error',
        // Not always relevant
        'react/require-default-props': 'off',
        'react/sort-prop-types': 'error',
        // This depends entirely on what you're doing. There's no universal pattern
        'react/state-in-constructor': 'off',
        // stylistic opinion. For conditional assignment we want it outside, otherwise as static
        'react/static-property-placement': 'off',
        // Currently not in recommended ruleset but catches real bugs.
        'react/no-unstable-nested-components': 'error',
    },
    overrides: [
        {
            files: ['*/server/*/**'],
            rules: {
                'no-console': 'off',
            },
        },
        {
            files: [
                // matching the pattern of the test runner
                '*.test.js',
                '*.test.ts',
                '*.test.tsx',
            ],
            extends: ['plugin:mocha/recommended'],
            rules: {
                // does not work with wildcard imports. Mistakes will throw at runtime anyway
                'import/named': 'off',
                'no-restricted-imports': [
                    'error',
                    {
                        // Use named import from `test/utils` instead.
                        // The other files are private.
                        patterns: ['test/utils/*'],
                    },
                ],

                // upgraded level from recommended
                'mocha/no-exclusive-tests': 'error',
                'mocha/no-skipped-tests': 'error',

                // no rationale provided in /recommended
                'mocha/no-mocha-arrows': 'off',
                // definitely a useful rule but too many false positives
                // due to `describeConformance`
                // "If you're using dynamically generated tests, you should disable this rule.""
                'mocha/no-setup-in-describe': 'off',
                // `beforeEach` for a single case is optimized for change
                // when we add a test we don't have to refactor the existing
                // test to `beforeEach`.
                // `beforeEach`+`afterEach` also means that the `beforeEach`
                // is cleaned up in `afterEach` if the test causes a crash
                'mocha/no-hooks-for-single-case': 'off',

                // disable eslint-plugin-jsx-a11y
                // tests are not driven by assistive technology
                // add `jsx-a11y` rules once you encounter them in tests
                'jsx-a11y/click-events-have-key-events': 'off',
                'jsx-a11y/control-has-associated-label': 'off',
                'jsx-a11y/iframe-has-title': 'off',
                'jsx-a11y/label-has-associated-control': 'off',
                'jsx-a11y/mouse-events-have-key-events': 'off',
                'jsx-a11y/no-noninteractive-tabindex': 'off',
                'jsx-a11y/no-static-element-interactions': 'off',
                'jsx-a11y/tabindex-no-positive': 'off',

                // They are accessed to test custom validator implementation with PropTypes.checkPropTypes
                'react/forbid-foreign-prop-types': 'off',
                // components that are defined in test are isolated enough
                // that they don't need type-checking
                'react/prop-types': 'off',
                'react/no-unused-prop-types': 'off',
            },
        },
        {
            files: ['*.d.ts'],
            rules: {
                'import/export': 'off', // Not sure why it doesn't work
            },
        },
        {
            files: ['*.tsx'],
            excludedFiles: '*.spec.tsx',
            rules: {
                // WARNING: If updated, make sure these rules are merged with `no-restricted-imports` (#ts-source-files)
                'no-restricted-imports': [
                    'error',
                    {
                        patterns: [
                            // Allow deeper imports for TypeScript types. TODO?
                            '@nno/*/*/*/*',
                        ],
                    },
                ],
            },
        },
        // Files used for generating TypeScript declaration files (#ts-source-files)
        {
            files: ['packages/*/src/**/*.tsx'],
            excludedFiles: '*.spec.tsx',
            rules: {
                'no-restricted-imports': ['error'],
                'react/prop-types': 'off',
            },
        },
        {
            files: ['*.spec.tsx', '*.spec.ts'],
            rules: {
                'no-alert': 'off',
                'no-console': 'off',
                'no-empty-pattern': 'off',
                'no-lone-blocks': 'off',
                'no-shadow': 'off',

                '@typescript-eslint/no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-use-before-define': 'off',

                // Not sure why it doesn't work
                'import/export': 'off',
                'import/prefer-default-export': 'off',

                'jsx-a11y/anchor-has-content': 'off',
                'jsx-a11y/anchor-is-valid': 'off',
                'jsx-a11y/tabindex-no-positive': 'off',

                'react/default-props-match-prop-types': 'off',
                'react/no-access-state-in-setstate': 'off',
                'react/no-unused-prop-types': 'off',
                'react/prefer-stateless-function': 'off',
                'react/prop-types': 'off',
                'react/require-default-props': 'off',
                'react/state-in-constructor': 'off',
                'react/static-property-placement': 'off',
            },
        },
        {
            files: ['packages/*/src/**/*{.ts,.tsx,.js}'],
            excludedFiles: ['*.d.ts', '*.spec.ts', '*.spec.tsx'],
            rules: {
                'no-restricted-imports': ['error'],
            },
        },
        {
            files: ['test/bundling/scripts/**/*.js'],
            rules: {
                // ES modules need extensions
                'import/extensions': ['error', 'ignorePackages'],
            },
        },
    ],
};
