// mock data that matches the props type / interface for easy testing

import { Props } from ".";

const base: Props = {
    label: "Sample Text",
    onClick: () => {},
    variant: "filled",
};

const alt: Props = {
    label: "Sample Text",
    onClick: () => {},
    variant: "outlined",
};

export const mockChipProps = {
    base,
    alt,
};
