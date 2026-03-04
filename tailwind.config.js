/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-blue-100', 'text-blue-600',
    'bg-green-100', 'text-green-600',
    'bg-purple-100', 'text-purple-600',
    'bg-yellow-100', 'text-yellow-600',
    'bg-red-100', 'text-red-600',
    'bg-indigo-100', 'text-indigo-600',
    'bg-amber-100', 'text-amber-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-source-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#eff4fb',
          100: '#d9e4f5',
          200: '#b3c9eb',
          300: '#8daede',
          400: '#6793d1',
          500: '#3a6fb5',
          600: '#1e3a5f',
          700: '#1a3254',
          800: '#152a47',
          900: '#10213a',
          950: '#0b1728',
        },
        'accent': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
