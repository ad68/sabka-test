import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#35663A',
					foreground: 'white',

				},
				secondary: {
					DEFAULT: '#eaaa1e',
					foreground: '#35663A'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				fallDown: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-50px)',
					},
					'70%': {
						opacity: '1',
						transform: 'translateY(5px)',
					},
					'100%': {
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'fall-down': 'fallDown 300ms cubic-bezier(0.25, 1, 0.5, 1) forwards',
			},
			backgroundImage: {
				'gradient-text': 'radial-gradient(58.25% 85.71% at 78.39% 14.29%, #4EB301 0%, #01532F 100%)',
				'custom-radial-home-page': 'radial-gradient(58.25% 85.71% at 78.39% 14.29%, #4EB301 0%, #01532F 100%)',
				'button-join-background': 'radial-gradient(53.77% 107.14% at 74.19% 0%, #F5AC38 0%, #D11F01 100%)',
				'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
			},
			screens: {
				'10xl': '1900px',
			},
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require("tailwindcss-animate"),
		function ({ addComponents }: { addComponents: never }) {
			// @ts-expect-error
			addComponents({
				'.underline-clip::after': {
					content: "''",
					position: 'absolute',
					top: '105%',
					width: '135%',
					aspectRatio: '3 / 1',
					left: '50%',
					transform: 'translate(-50%, 0)',
					borderRadius: '45%',
					border: '2px solid #BB4733',
					mask: 'conic-gradient(from 285deg, white 0 130deg, transparent 150deg)',
				},
			});
		},

	],
} satisfies Config;
