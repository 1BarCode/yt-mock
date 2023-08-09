import classNames from "classnames";
import { ReactNode } from "react";

export type Props = {
    children: ReactNode;
    secondary?: boolean;
    rounded?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
    children,
    secondary = false,
    rounded = false,
    className = "",
    ...buttonProps
}) => {
    const customClassNameExists = Boolean(className);

    const classes = classNames({
        "px-4 py-2": true,
        "bg-black-500": !customClassNameExists,
        "hover:bg-black-300 text-white": !secondary,
        "bg-white hover:bg-gray text-black-500": secondary,
        "rounded-full": rounded,
        [className]: customClassNameExists,
    });

    return (
        <button type="button" className={classes} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;
