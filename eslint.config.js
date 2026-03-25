import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
export default defineConfig({
    ignores: ['dist/**', 'node_modules/**'],
}, js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, {
    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],
        'no-undef': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/consistent-type-imports': ['error', {
                prefer: 'type-imports',
            }],
        'no-console': ['warn', {
                allow: ['log', 'warn', 'error', 'info'],
            }],
        'no-var': 'error',
        'prefer-const': 'error',
        'eqeqeq': ['error', 'always'],
    },
});
