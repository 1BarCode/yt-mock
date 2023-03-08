import { FadeLoader } from "react-spinners";

export type Props = {
    isLoading: boolean;
};

const LoaderOverlay: React.FC<Props> = ({ isLoading }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-black-300 bg-opacity-20 z-50 flex justify-center items-center ${
                isLoading ? "block" : "hidden"
            }`}
        >
            <FadeLoader loading={isLoading} color="#FFFFFF" />
        </div>
    );
};

export default LoaderOverlay;
