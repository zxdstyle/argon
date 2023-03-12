import { defineConfig } from 'vite';
import { getRootPath, getSrcPath, setupVitePlugins } from './build';

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
	const rootPath = getRootPath();
	const srcPath = getSrcPath();

	return {
		resolve: {
			alias: {
				'~': rootPath,
				'@': srcPath,
			},
		},
		plugins: setupVitePlugins(),
	};
});
