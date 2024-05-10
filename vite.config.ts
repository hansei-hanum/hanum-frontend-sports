import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            { find: '@components', replacement: '/src/components' },
            { find: '@pages', replacement: '/src/pages' },
            { find: '@common', replacement: '/src/components/common' },
            { find: '@hooks', replacement: '/src/hooks' },
            { find: '@constants', replacement: '/src/constants' },
            { find: '@utils', replacement: '/src/utils' },
            { find: '@atom', replacement: '/src/atom' },
            { find: '@assets', replacement: '/src/assets' },
            { find: '@styles', replacement: '/src/styles' },
        ],
    },
});
