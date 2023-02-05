import { ReactElement } from "react";
import Chip from "../components/display/Chip";
import Trending from "../components/display/Trending";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    return (
        <section>
            <div className="p-3">
                <div className="ml-3 flex gap-3">
                    <Chip label="All" className="rounded-lg" />
                    <Chip label="Drama" className="rounded-lg" />
                    <Chip label="Taste" className="rounded-lg" />
                    <Chip label="Music" className="rounded-lg" />
                    <Chip label="Gaming" className="rounded-lg" />
                    <Chip label="All" className="rounded-lg" />
                    <Chip label="Drama" className="rounded-lg" />
                    <Chip label="Taste" className="rounded-lg" />
                    <Chip label="Music" className="rounded-lg" />
                    <Chip label="Gaming" className="rounded-lg" />
                    <Chip label="All" className="rounded-lg" />
                    <Chip label="Drama" className="rounded-lg" />
                    <Chip label="Taste" className="rounded-lg" />
                    <Chip label="Music" className="rounded-lg" />
                    <Chip label="Gaming" className="rounded-lg" />
                </div>
            </div>

            <div className="pt-6">
                <Trending />
            </div>
        </section>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;

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
