export const remBase = 16;

// spacing
export const spacingXxxs = '.25rem';
export const spacingXxs = '.5rem';
export const spacingXs = '1rem';
export const spacingS = '1.5rem';
export const spacingMd = '2rem';
export const spacingLg = '3rem';
export const spacingXl = '4rem';
export const spacingXxl = '6rem';
export const spacingXxxl = '8rem';

/**
 * Converts a percentage-based letter-spacing value to rem
 * @param {number} percentage - The letter-spacing percentage value.
 * @returns {string} The calculated letter-spacing in rem units.
 */
function percentageToRem(percentage) {
    const rem = (percentage / 100) * remBase;
    return `${rem / remBase}rem`;
}

// typography
export const typographyStyles = {
    h1: { size: '3.25rem', weight: 'normal', lineHeight: '115%', spacing: percentageToRem(-2.5), family: 'Space Grotesk' },
    h2: { size: '2.5rem', weight: 'normal', lineHeight: '115%', spacing: percentageToRem(-2.5), family: 'Space Grotesk' },
    h3: { size: '1.875rem', weight: 'normal', lineHeight: '125%', spacing: percentageToRem(-2.5), family: 'Space Grotesk' },
    h4: { size: '1.5rem', weight: 'normal', lineHeight: '130%', spacing: percentageToRem(-2.5), family: 'Space Grotesk' },
    'p-large': { size: '1.125rem', weight: 'normal', lineHeight: '153%', spacing: percentageToRem(-2.5), family: 'Space Grotesk' },
    'p-medium': { size: '1.0rem', weight: 'normal', lineHeight: '160%', spacing: percentageToRem(-2), family: 'Space Grotesk' },
    'p-small': { size: '0.9rem', weight: 'normal', lineHeight: '160%', spacing: percentageToRem(0), family: 'Space Grotesk' },
    terminal1: { size: '1.125rem', weight: 'normal', lineHeight: '140%', spacing: percentageToRem(-2.5), family: 'Space Mono' },
    terminal2: { size: '1rem', weight: 'normal', lineHeight: '140%', spacing: percentageToRem(-2.5), family: 'Space Mono' },
    label1: { size: '0.875rem', weight: 'normal', lineHeight: '115%', spacing: percentageToRem(2.5), family: 'Courier Prime' },
    label2: { size: '0.9375rem', weight: 'normal', lineHeight: '160%', spacing: percentageToRem(0), family: 'Courier Prime' },
};


export const red = {
    base: '#F7413A',
    hover: '#C6342E',
    active: '#AD2E29',
    tint: '#FFF5F4'
};
export const blue = {
    base: '#63B5CD',
    hover: '#4F91A4',
    active: '#457F90',
    tint: '#F6FBFC'
};
export const white = '#FFFFFF';
export const black = '#000000';
export const gray = {
    100: '#EFEFEF',
    200: '#E4E4E4',
    300: '#C8C8C8',
    400: '#ADADAD',
    500: '#929292',
    600: '#606060',
    700: '#4A4A4A',
    800: '#222222'
};

export const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em'
}