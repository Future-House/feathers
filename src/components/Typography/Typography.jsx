import React, { forwardRef, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Animator } from '../../utils';
import { spacingXxs, typographyStyles } from '../../theme'
import { TypeWriterComponent } from '../../hooks';
import { StarIcon } from '../../icons';
import PropTypes from 'prop-types';

const Typography = forwardRef(({ variant = 'p-medium', children, typeWriter = false, typeWriterSpeedOverride, ...rest }, ref) => {
    const { size, weight, lineHeight, spacing, family } = typographyStyles[variant] || typographyStyles['p-medium'];
    const [isDone, setIsDone] = useState(false);

    let internalVariant;
    switch (variant) {
        case 'p-large':
        case 'p-medium':
        case 'p-small':
            internalVariant = 'p';
            break;
        case 'label1':
        case 'label2':
            internalVariant = 'caption';
            break;
        case 'terminal1':
        case 'terminal2':
            internalVariant = 'code';
            break;
        default:
            internalVariant = variant;
    }

    return (
        <>
            <Text
                fontSize={size}
                fontWeight={weight}
                lineHeight={lineHeight}
                letterSpacing={spacing}
                fontFamily={family}
                as={internalVariant}
                ref={ref}
                {...rest} // allow the default typography styles to be overwritten if needed
            >
                {typeWriter ? (
                    <>
                        <TypeWriterComponent desiredText={children} setIsDone={setIsDone} speedOverride={typeWriterSpeedOverride} />
                    </>
                ) : (
                    children
                )}
            </Text>
            {!isDone && typeWriter && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: spacingXxs }}>
                    <Animator>
                        <StarIcon />
                    </Animator>
                </Box>
            )}
        </>
    );
});
Typography.displayName = 'Typography';
Typography.propTypes = {
    variant: PropTypes.oneOf(['p-large', 'p-medium', 'p-small', 'terminal1', 'terminal2', 'label1', 'label2', 'h1', 'h2', 'h3', 'h4']),
    children: PropTypes.node.isRequired,
    typeWriter: PropTypes.bool,
    typeWriterSpeedOverride: PropTypes.number
};
Typography.defaultProps = {
    variant: 'p-medium'
};
export default Typography;
