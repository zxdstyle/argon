import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(): (PluginOption | PluginOption[])[] {
	const plugins: PluginOption[] = [react()];

	return plugins;
}
