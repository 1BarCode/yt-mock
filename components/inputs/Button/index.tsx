import { ReactNode } from "react";

export type Props = {
    children: ReactNode;
    secondary?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
    children,
    secondary,
    className,
    ...buttonProps
}) => {
    const classes = `px-4 py-2 rounded-md ${
        secondary ? "bg-gray-300 text-gray-800" : "bg-blue-500 text-white"
    } ${className}`;

    return (
        <button type="button" className={classes} {...buttonProps}>
            {children}
        </button>
    );
};

export default Button;
