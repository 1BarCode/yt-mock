// mock data that matches the props type / interface for easy testing

import { Props } from ".";

const base: Props = {
    children: "Hello World!",
};

const alt: Props = {
    children: "Hello Alt World!",
};

export const mockAuthLayoutProps = {
    base,
    alt,
};
