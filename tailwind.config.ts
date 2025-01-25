import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				'green-light': '#BBF7D0',
				'green-medium': '#37de75',
				'green-dark': '#0a3e1e',
				'gray-light': '#EBEBEB',
				'gray-medium': '#64748B',
				'gray-dark': '#282828',
				'text-white': '#ffffff',
			},
		},
	},
	plugins: [],
} satisfies Config;
