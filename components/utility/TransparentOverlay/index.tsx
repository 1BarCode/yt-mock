export type Props = {
    isLoading: boolean;
};

// create a transparent page overlay that's positioned relative to a parent container with no spinner

const TransparentOverlay: React.FC<Props> = ({ isLoading }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full min-h-screen bg-black-300 bg-opacity-20 z-50 flex justify-center items-center ${
                isLoading ? "block" : "hidden"
            }`}
        />
    );
};

export default TransparentOverlay;
