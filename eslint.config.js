import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,jsx,vue}'], // Các file cần kiểm tra
    },
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // Các file/thư mục cần bỏ qua
    },
    {
        // Cấu hình ESLint mặc định cho JS
        ...js.configs.recommended,
    },
    {
        // Cấu hình plugin Vue với "essential" rules
        ...pluginVue.configs['flat/essential'],
    },
    {
        // Bỏ qua các quy tắc định dạng của Prettier
        ...skipFormatting,
    },
];
