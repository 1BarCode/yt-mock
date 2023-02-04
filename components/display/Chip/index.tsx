import classNames from "classnames";
import { ReactNode } from "react";

export type Props = {
    label: ReactNode;
    variant?: "filled" | "outlined";
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Chip: React.FC<Props> = ({
    label,
    variant = "filled",
    className = "",
    ...divProps
}) => {
    const classes = classNames({
        "px-3 py-[6px] w-auto inline-block border-[1px] border-black-500 text-sm":
            true,
        "bg-black-500 hover:bg-black-300": variant === "filled",
        "bg-black-900": variant === "outlined",
        [className]: Boolean(className),
    });

    return (
        <div className={classes} {...divProps}>
            {label}
        </div>
    );
};

export default Chip;
