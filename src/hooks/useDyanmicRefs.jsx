import { useRef, createRef } from 'react';

/**
 * A custom hook for creating a dynamic list of React ref objects. This hook is useful for scenarios where you have a list of elements 
 * generated from data and you need a ref for each item, but the number of items can change.
 * @param {Array} data - An array of data items used to generate the dynamic list of refs. The length of `data` determines the number 
 * of refs created. Each item in the array represents a placeholder for a ref that will be assigned to a corresponding element.
 * @returns {object} An object containing a ref for each item in the input `data` array, accessible by its index. This object is wrapped 
 * in a React ref object, so the current value of the returned object is accessed via `.current`.
 * @example
 * 
 * const data = ["First", "Second", "Third"];
 * const refs = useDynamicRefs(data);
 * 
 * return (
 *   <form>
 *     {data.map((item, index) => (
 *       <input
 *         key={index}
 *         ref={refs.current[index]}
 *         defaultValue={item}
 *       />
 *     ))}
 *   </form>
 * );
 */
export default function useDynamicRefs(data) {
    return useRef(data.reduce((refs, _, index) => {
        refs[index] = createRef();
        return refs;
    }, {}));
}