import { useEffect, useState, useRef } from 'react';

/**
 * A custom React hook that simulates a typewriter effect on the text content of a DOM element.
 * @param {React.RefObject} ref - A React ref object pointing to the target DOM element where the typewriter effect is applied.
 * @param {string} desiredText - The text to be displayed using the typewriter effect.
 * @param {string} currentId - An identifier that, when changed, will restart the typewriting effect with the new `desiredText`. This can be used to trigger the effect multiple times with different texts.
 * @param {Function} isDone - A callback function that is called with a boolean value indicating whether the typewriting effect has finished (`true`) or is ongoing (`false`).
 */
export function useTypeWriter(ref, desiredText, currentId, isDone) {
    useEffect(() => {
        if (!ref?.current) return;

        let index = 0;
        isDone(false);

        const intervalId = setInterval(() => {
            if (index < desiredText.length) {
                ref.current.textContent += desiredText.charAt(index);
                index++;
            } else {
                ref.current.textContent += ' ';
                clearInterval(intervalId);
                isDone(true);
            }
        }, 15);

        return () => clearInterval(intervalId);
    }, [desiredText, currentId, ref, isDone]);
}

/**
 * A React Component that simulates a typewriter effect on text.
 * @param {string} desiredText - The string of text
 * @param {Function} setIsDone - callback to tell the parent if the text has fully rendered
 * @param {number} [speedOverride=15] - the delay in milliseconds before rendering the next character
 * @returns {string} the partial or completed string as part of the typewriter
 */
export function TypeWriterComponent({ desiredText, setIsDone, speedOverride = 15 }) {
    const [displayText, setDisplayText] = useState('');
    const displayTextRef = useRef('');


    useEffect(() => {
        displayTextRef.current = '';
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < desiredText.length) {
                setIsDone(false);
                displayTextRef.current += desiredText.charAt(index);
                // don't try to do something crafty like setDisplayText((prev) => prev + desiredText.charAt(index))
                // because of how batch updates are processed in react state, it's prone to desyncronous errors
                setDisplayText(displayTextRef.current);
                index++;
            } else {
                clearInterval(intervalId);
                setIsDone(true);
            }
        }, speedOverride);

        return () => {
            clearInterval(intervalId);
            displayTextRef.current = '';
        };
    }, [desiredText, setIsDone, speedOverride]);

    return displayText;
}