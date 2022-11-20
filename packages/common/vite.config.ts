import {defineConfig} from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';
import viteConfig from '../../vite.config';

export default defineConfig({
    ...viteConfig,
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        outDir: 'build',
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'Common',
            formats: ['es', 'umd'],
            fileName: (format) => `common.${format}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                '@mui/material',
                '@emotion/react',
                '@emotion/styled',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': '@mui/material',
                    '@emotion/react': '@emotion/react',
                    '@emotion/styled': '@emotion/styled',
                },
            },
        },
    },
    server: {
        port: 3001,
    },
});
