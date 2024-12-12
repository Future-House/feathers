import { forwardRef } from 'react'
import { Text as ChakraText } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const textStyles = {
    h1: { fontSize: '3.25rem', fontWeight: 'normal', lineHeight: '115%', letterSpacing: '-0.04rem', fontFamily: 'Noto Sans' },
    h2: { fontSize: '2.5rem', fontWeight: 'normal', lineHeight: '115%', letterSpacing: '-0.04rem', fontFamily: 'Noto Sans' },
    h3: { fontSize: '1.875rem', fontWeight: 'normal', lineHeight: '125%', letterSpacing: '-0.04rem', fontFamily: 'Noto Sans' },
    h4: { fontSize: '1.5rem', fontWeight: 'normal', lineHeight: '130%', letterSpacing: '-0.04rem', fontFamily: 'Noto Sans' },
    'p-large': { fontSize: '1.125rem', fontWeight: 'normal', lineHeight: '153%', letterSpacing: '-0.04rem', fontFamily: 'Noto Sans' },
    'p-medium': { fontSize: '1rem', fontWeight: 'normal', lineHeight: '160%', letterSpacing: '-0.032rem', fontFamily: 'Noto Sans' },
    'p-small': { fontSize: '0.9rem', fontWeight: 'normal', lineHeight: '160%', letterSpacing: '0', fontFamily: 'Noto Sans' },
    terminal1: { fontSize: '1.125rem', fontWeight: 'normal', lineHeight: '140%', letterSpacing: '-0.04rem', fontFamily: 'Space Mono' },
    terminal2: { fontSize: '1rem', fontWeight: 'normal', lineHeight: '140%', letterSpacing: '-0.04rem', fontFamily: 'Space Mono' },
    label1: { fontSize: '0.875rem', fontWeight: 'normal', lineHeight: '115%', letterSpacing: '0.04rem', fontFamily: 'Courier Prime' },
    label2: { fontSize: '0.9375rem', fontWeight: 'normal', lineHeight: '160%', letterSpacing: '0', fontFamily: 'Courier Prime' }
}

const Text = forwardRef(({ variant = 'p-medium', ...props }, ref) => (
    <ChakraText ref={ref} {...textStyles[variant]} {...props} />
))

Text.displayName = 'Text'
Text.propTypes = {
    variant: PropTypes.oneOf(['p-large', 'p-medium', 'p-small', 'terminal1', 'terminal2', 'label1', 'label2', 'h1', 'h2', 'h3', 'h4']),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export { Text, textStyles }