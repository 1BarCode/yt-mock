// mock data that matches the props type / interface for easy testing

import { Props } from ".";

const base: Props = {
    sampleTextProps: "Hello World!",
};

const alt: Props = {
    sampleTextProps: "Hello Alt World!",
};

export const mockSidebarLayoutProps = {
    base,
    alt,
};
