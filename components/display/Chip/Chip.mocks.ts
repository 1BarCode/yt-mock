// mock data that matches the props type / interface for easy testing

import { Props } from ".";

const base: Props = {
    label: "Sample Text",
    variant: "filled",
};

const alt: Props = {
    label: "Sample Text",
    variant: "outlined",
};

export const mockChipProps = {
    base,
    alt,
};
