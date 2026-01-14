import localFont from 'next/font/local';

// ========================================
// Samawah Font Configuration
// ========================================
// This is the SINGLE source of truth for fonts
// Using Next.js local font optimization for best performance

export const samawahFont = localFont({
    src: [
        {
            path: '../../public/fonts/samawah-regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/samawah-medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/samawah-bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-samawah',
    display: 'swap',
    preload: true,
    fallback: ['Arial', 'sans-serif'],
});

// Export the CSS variable name for use in tailwind config
export const fontVariable = samawahFont.variable;
export const fontClassName = samawahFont.className;
