import { ReactElement, useState } from "react";
import Chip from "../components/display/Chip";
import HomeRecommendation from "../components/display/HomeRecommendation";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import type { NextPageWithLayout } from "./_app";

const defaultCategories = [
    {
        label: "All",
        selected: true,
    },
    {
        label: "Drama",
        selected: false,
    },
    {
        label: "Taste",
        selected: false,
    },
    {
        label: "Music",
        selected: false,
    },
    {
        label: "Gaming",
        selected: false,
    },
    {
        label: "Tech",
        selected: false,
    },
    {
        label: "Gadgets",
        selected: false,
    },
];

const Home: NextPageWithLayout = () => {
    const [categories, setCategories] = useState(defaultCategories);
    const [selectedCategory, setSelectedCategory] = useState(
        defaultCategories[0].label
    );

    const selectCategory = (label: string) => {
        setCategories((prev) =>
            prev.map((cat) => {
                if (cat.label === label) {
                    cat.selected = true;
                    return cat;
                } else {
                    cat.selected = false;
                    return cat;
                }
            })
        );
        setSelectedCategory(label);
    };

    const ChipCategories = categories.map(({ label, selected }) => (
        <Chip
            key={label}
            label={label}
            className={
                selected
                    ? "rounded-lg cursor-pointer bg-white text-black-500 hover:bg-white"
                    : "rounded-lg cursor-pointer"
            }
            onClick={() => selectCategory(label)}
        />
    ));

    return (
        <section>
            <div className="p-3">
                <div className="ml-3 flex gap-3">{ChipCategories}</div>
            </div>

            <div className="pt-6">
                <HomeRecommendation selectedCategory={selectedCategory} />
            </div>
        </section>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;

// const { reset } = useQueryErrorResetBoundary();

//     function myErrorHandler(error: any) {
//         console.log(error);
//         // const timeToClose = 10000; // in ms
//         // toast.error("An error occurred", { autoClose: timeToClose });
//     }

// const DynamicTrendingSuspense = dynamic(
//     () => import("../components/display/Trending/TrendingSuspense"),
//     {
//         ssr: false,
//         // suspense: true,
//     }
// );

{
    /* <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onError={myErrorHandler}
                    onReset={reset}
                >
                    <Suspense fallback={<div>LOADING SUSPENSE</div>}>
                        <DynamicTrendingSuspense />
                    </Suspense>
                </ErrorBoundary> */
}

// const [isOpen, setIsOpen] = useState(false);
// const handleOpen = () => setIsOpen(true);
// const handleClose = () => setIsOpen(false);
// <Modal
//                 isOpen={isOpen}
//                 onClose={handleClose}
//                 button={<Button onClick={handleOpen}>Open Modal</Button>}
//             >
//                 <h2>Are you sure you want to leave?</h2>
//                 <Button onClick={handleClose}>Close Modal</Button>
//                 <Button secondary onClick={handleClose}>
//                     Cancel
//                 </Button>
//             </Modal>
