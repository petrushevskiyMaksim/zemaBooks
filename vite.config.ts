import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
			app: '/src/app',
			assets: '/src/assets',
			components: '/src/components',
			widgets: '/src/widgets',
			pages: '/src/pages',
			shared: '/src/shared',
			theme: '/src/theme',
			utils: '/src/utils',
			lib: '/src/lib',
			fonts: '/src/fonts',
		},
	},
});
