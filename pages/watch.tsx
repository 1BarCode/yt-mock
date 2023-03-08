import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import VideoPlayer from "../components/display/VideoPlayer";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import LoaderOverlay from "../components/utility/LoaderOverlay";
import { searchMovieHandler } from "../lib/config/youtube";
import { NextPageWithLayout } from "./_app";

const Watch: NextPageWithLayout = () => {
    const router = useRouter();
    const { v: videoId } = router.query;

    const { data, error, isError, isLoading } = useQuery(
        ["watch", videoId],
        () => searchMovieHandler(videoId as string),
        {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            onError: (err: AxiosError) => err,
        }
    );

    console.log("data", data);

    const video = data?.data.items[0];

    if (isLoading) return <LoaderOverlay isLoading={isLoading} />;

    if (isError) return <div>{error?.message}</div>;

    return (
        <section className="pt-6 px-24 w-full flex gap-x-6">
            <div className="w-9/12">
                <div>
                    <VideoPlayer videoId={videoId} />
                </div>
                <div>
                    <h1 className="text-xl font-bold mt-2">
                        {video.snippet.title}
                    </h1>
                </div>
            </div>
            <div className="w-3/12 min-h-screen">Recommended Videos</div>
        </section>
    );
};

Watch.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout
            drawer={false}
            backgroundColor="bg-gradient-to-r from-black-500 to-black-900"
        >
            {page}
        </PrimaryLayout>
    );
};

export default Watch;
