import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-geist-sans)", "sans-serif"],
  			mono: ["var(--font-geist-mono)", "monospace"],
  			display: ["var(--font-funnel-display)", "sans-serif"]
  		},
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			purple: {
  				'50': '#f6f5fd',
  				'100': '#efecfb',
  				'200': '#e0dbf9',
  				'300': '#cabef4',
  				'400': '#ad9aeb',
  				'500': '#9270e2',
  				'600': '#8658d7',
  				'700': '#713fc2',
  				'800': '#5e35a2',
  				'900': '#4e2d85',
  				'950': '#311b5a'
  			},
  			pink: {
  				'50': '#fef1f7',
  				'100': '#fee5f2',
  				'200': '#fecce5',
  				'300': '#ff97ca',
  				'400': '#fe68ae',
  				'500': '#f83c8f',
  				'600': '#e81a6b',
  				'700': '#ca0c51',
  				'800': '#a70d43',
  				'900': '#8b103b',
  				'950': '#55021f'
  			},
  			green: {
  				'50': '#effef5',
  				'100': '#dafee8',
  				'200': '#b8fad3',
  				'300': '#65f3a0',
  				'400': '#41e787',
  				'500': '#19ce66',
  				'600': '#0eab50',
  				'700': '#0f8641',
  				'800': '#116a38',
  				'900': '#105730',
  				'950': '#033018'
  			},
  			orange: {
  				'50': '#fef9ec',
  				'100': '#fdebc8',
  				'200': '#fad68d',
  				'300': '#f7bd52',
  				'400': '#f6a937',
  				'500': '#ef8011',
  				'600': '#d45e0b',
  				'700': '#b0400d',
  				'800': '#8f3111',
  				'900': '#752a12',
  				'950': '#431305'
  			},
  			peach: {
  				'50': '#fff2f1',
  				'100': '#ffe2df',
  				'200': '#ffcac5',
  				'300': '#ffa59d',
  				'400': '#ff7164',
  				'500': '#ff5141',
  				'600': '#ed2715',
  				'700': '#c81d0d',
  				'800': '#a51c0f',
  				'900': '#881e14',
  				'950': '#4b0a04'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
