// mock data that matches the props type / interface for easy testing

import { Props } from ".";

const base: Props = {
    error: new Error("Test Error"),
    resetErrorBoundary: () => {},
};

const alt: Props = {
    error: new Error("Test Error"),
    resetErrorBoundary: () => {},
};

export const mockErrorFallbackProps = {
    base,
    alt,
};
