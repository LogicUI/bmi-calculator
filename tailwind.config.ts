import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    variants: {
      extend: {
        outline: ['focus-visible'],
      },
      backgroundSize: {
        '50%': '50%'
      },
    },
    extend: {
      backgroundColor: {
        customBlue: '#345FF6',
        linearBlue: '#D6E6FE',
        customGray: '#5E6E85',
        lightGray: '#D8E2E7',
        grayout: '#D9D9D9'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        customGray: '#5E6E85',
        customBlue: '#345FF6'
      }
    },
  },
  plugins: [
  ],
}
export default config
