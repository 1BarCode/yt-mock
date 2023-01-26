import { ReactElement } from "react";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
    return <section>Next App</section>;
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
