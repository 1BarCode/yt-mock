import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import VideoCard from "../components/cards/VideoCard";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import LoaderOverlay from "../components/utility/LoaderOverlay";
import { searchHandler } from "../lib/config/youtube";
import { NextPageWithLayout } from "./_app";

const Results: NextPageWithLayout = () => {
    const router = useRouter();
    const { search_query } = router.query;
    const { data, error, isError, isLoading } = useQuery(
        ["query", search_query],
        () => searchHandler(search_query as string),
        {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity, // 5 * (60 * 1000), // 5 min
            onError: (err: AxiosError) => err,
        }
    );

    if (isLoading) return <LoaderOverlay isLoading={isLoading} />;

    if (isError) return <div>{error.message}</div>;

    return (
        <section>
            <div className="pt-6">Search Results for: {search_query}</div>
            <div className="space-y-6 px-6 pb-4 d-flex">
                <div className="w-[1280px] mx-auto">
                    {data?.data.items.map((video: any) => (
                        <VideoCard
                            variant="search"
                            video={video}
                            key={video.id.videoId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

Results.getLayout = function getLayout(page: ReactElement) {
    return <PrimaryLayout drawer={true}>{page}</PrimaryLayout>;
};

export default Results;
