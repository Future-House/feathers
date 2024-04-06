import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

const durations = {
    none: '0s',
    short: '1s',
    medium: '2s',
    long: '4s',
};

/**
 * Animated component that applies CSS animations to its children.
 * @param {string} [animationType] - Specifies the type of animation. Default is 'spin'.
 * @param {React.ReactNode} children - The content to be rendered inside the animated component.
 * @param {string} [duration] - Defines the duration of the animation. Default is 'long'.
 * @param {string} [timingFunction] - Specifies the timing function of the animation. Default is 'linear'.
 * @param {string} [delay] - Sets the delay before the animation starts. Default is 'none'.
 * @param {string} [iterationCount] - Determines the number of times the animation will repeat. Default is 'infinite'.
 * @returns {React.ReactElement} A react element with specified animations
 */
export default function Animator({
    animationType = 'spin',
    children,
    duration = 'long',
    timingFunction = 'linear',
    delay = 'none',
    iterationCount = 'infinite',
}) {

    // maybe move this to .css...
    const animationsStyle = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;

    const el = cloneElement(children, {
        style: {
            animation: `${animationType} ${durations[duration]} ${timingFunction} ${durations[delay]} ${iterationCount}`
        }
    });

    return (
        <>
            <style>{animationsStyle}</style>
            {el}
        </>
    );
}

Animator.propTypes = {
    animationType: PropTypes.oneOf(['spin', 'shake', 'fadeIn', 'fadeOut']),
    children: PropTypes.node.isRequired,
    duration: PropTypes.oneOf(['none', 'short', 'medium', 'long']),
    timingFunction: PropTypes.string,
    delay: PropTypes.oneOf(['none', 'short', 'medium', 'long']),
    iterationCount: PropTypes.string,
};
