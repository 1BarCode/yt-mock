import { useRouter } from "next/router";
import { ReactElement } from "react";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "./_app";

const Results: NextPageWithLayout = () => {
    const router = useRouter();
    const { search_query } = router.query;

    return (
        <section>
            <div className="pt-6">Search Results for: {search_query}</div>
        </section>
    );
};

Results.getLayout = function getLayout(page: ReactElement) {
    return <PrimaryLayout drawer={true}>{page}</PrimaryLayout>;
};

export default Results;
