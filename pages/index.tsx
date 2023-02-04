import { ReactElement, useState } from "react";
import Button from "../components/inputs/Button";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import Modal from "../components/utility/Modal";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <section>
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                button={<Button onClick={handleOpen}>Open Modal</Button>}
            >
                <h2>Are you sure you want to leave?</h2>
                <Button onClick={handleClose}>Close Modal</Button>
                <Button secondary onClick={handleClose}>
                    Cancel
                </Button>
            </Modal>
        </section>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
