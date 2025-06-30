import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';

// Polyfill for matchMedia (required by Vaul drawer)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Polyfill for setPointerCapture and releasePointerCapture (required by Vaul drawer)
HTMLElement.prototype.setPointerCapture = jest.fn();
HTMLElement.prototype.releasePointerCapture = jest.fn();

// Polyfill for getComputedStyle.transform (required by Vaul drawer)
const originalGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = (element: Element, pseudoElt?: string | null) => {
  const computedStyle = originalGetComputedStyle(element, pseudoElt);
  return {
    ...computedStyle,
    transform: 'none',
    getPropertyValue: (property: string) => {
      if (property === 'transform') return 'none';
      return computedStyle.getPropertyValue(property);
    },
  } as CSSStyleDeclaration;
};

// Polyfill for ResizeObserver (required by input-otp)
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Polyfill for document.elementFromPoint (required by input-otp)
document.elementFromPoint = jest.fn().mockReturnValue(null);
