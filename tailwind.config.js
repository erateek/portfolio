/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,md,mdx}',
		'./src/components/**/*.{js,jsx}',
		'./src/app/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				// 1. SURFACES
				background: "hsl(var(--color-bg-page) / <alpha-value>)", // Main Page
				surface: "hsl(var(--color-bg-card) / <alpha-value>)",    // Cards
				dark: "hsl(var(--color-bg-dark) / <alpha-value>)",       // Footer/CTA
				subtle: "hsl(210 40% 96% / <alpha-value>)",              // Subtle background
				
				// 2. TEXT
				foreground: "hsl(var(--color-text-main) / <alpha-value>)",
				muted: "hsl(var(--color-text-muted) / <alpha-value>)",
				inverse: "hsl(var(--color-text-inverse) / <alpha-value>)",
				
				// 3. BRANDING
				primary: {
					DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
					dark: "hsl(var(--color-primary) / 0.9)", 
				},
				secondary: "hsl(var(--color-secondary) / <alpha-value>)",
				
				// 4. SERVICE ACCENTS (Semantic)
				design: "hsl(var(--color-accent-design) / <alpha-value>)",
				marketing: "hsl(var(--color-accent-marketing) / <alpha-value>)",
				tech: "hsl(var(--color-accent-tech) / <alpha-value>)",
				dev: "hsl(var(--color-accent-dev) / <alpha-value>)",
				mobile: "hsl(217 91% 60% / <alpha-value>)", // Mobile accent color
			},
			fontFamily: {
				sans: ['IBM Plex Sans Arabic', 'sans-serif'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'marquee': 'marquee 30s linear infinite',
				'marquee2': 'marquee2 30s linear infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

