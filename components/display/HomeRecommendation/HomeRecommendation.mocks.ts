// mock data that matches the props type / interface for easy testing

import { Props } from ".";

const base: Props = {
    selectedCategory: "Hello World!",
};

const alt: Props = {
    selectedCategory: "Hello Alt World!",
};

export const mockTrendingProps = {
    base,
    alt,
};
