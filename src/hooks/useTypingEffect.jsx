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
 * @returns {string} the partial or completed string as part of the typewriter
 */
export function TypeWriterComponent({ desiredText, setIsDone }) {
    const [displayText, setDisplayText] = useState('');
    const displayTextRef = useRef('');
    const timeoutRef = useRef(null);

    useEffect(() => {
        displayTextRef.current = '';
        let index = 0;
        let isUsingFirstDelayRange = true;

        const typeNextChar = () => {
            if (index < desiredText.length) {
                setIsDone(false);
                displayTextRef.current += desiredText.charAt(index);
                setDisplayText(displayTextRef.current);
                index++;

                let delay;
                if (isUsingFirstDelayRange) {
                    delay = Math.random() * (1 - 0.5) + 0.5;
                } else {
                    delay = Math.random() * (7.5 - 0.5) + 0.5;
                }

                if (index % 35 === 0) {
                    isUsingFirstDelayRange = !isUsingFirstDelayRange;
                }

                timeoutRef.current = setTimeout(typeNextChar, delay);
            } else {
                setIsDone(true);
            }
        };

        typeNextChar();

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            displayTextRef.current = '';
        };
    }, [desiredText, setIsDone]);

    return displayText;
}