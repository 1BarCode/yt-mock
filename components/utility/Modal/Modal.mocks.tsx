// mock data that matches the props type / interface for easy testing

import { Props } from ".";
import Button from "../../inputs/Button";

const base: Props = {
    isOpen: true,
    onClose: () => {},
    button: <Button onClick={() => {}}>Open Modal</Button>,
    children: (
        <>
            <h2>Are you sure you want to leave?</h2>
            <Button onClick={() => {}}>Close Modal</Button>
            <Button secondary onClick={() => {}}>
                Cancel
            </Button>
        </>
    ),
    variant: "default",
};

const alt: Props = {
    isOpen: true,
    onClose: () => {},
    button: <Button onClick={() => {}}>Open Modal</Button>,
    children: (
        <>
            <h2>Are you sure you want to leave?</h2>
            <Button onClick={() => {}}>Close Modal</Button>
            <Button secondary onClick={() => {}}>
                Cancel
            </Button>
        </>
    ),
    variant: "default",
};

export const mockModalProps = {
    base,
    alt,
};
