import classNames from "classnames";
import { ReactNode } from "react";

export type Props = {
    label: ReactNode;
    variant?: "filled" | "outlined";
    isActive?: boolean;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Chip: React.FC<Props> = ({
    label,
    variant = "filled",
    isActive,
    className = "",
    ...divProps
}) => {
    const classes = classNames(
        "px-3 py-[6px] inline-block border-[1px] border-black-500 text-sm rounded-lg cursor-pointer",
        {
            "bg-black-500 hover:bg-black-300 text-white":
                !isActive && variant === "filled",
            "bg-white hover:bg-white text-black-500 ":
                isActive && (variant === "filled" || variant === "outlined"),
            "bg-black-900 hover:bg-black-300 text:white":
                !isActive && variant === "outlined",
        },
        {
            [className]: Boolean(className),
        }
    );

    return (
        <div className={classes} {...divProps}>
            {label}
        </div>
    );
};

export default Chip;
