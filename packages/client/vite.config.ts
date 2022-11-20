import {defineConfig} from 'vite';
import viteConfig from '../../vite.config';

// https://vitejs.dev/config/
export default defineConfig({
    ...viteConfig,
    server: {
        port: 3000,
    },
});
