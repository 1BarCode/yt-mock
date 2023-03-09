import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import VideoCard from "../components/cards/VideoCard";
import VideoPlayer from "../components/display/VideoPlayer";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import LoaderOverlay from "../components/utility/LoaderOverlay";
import { getRelatedVideos, searchMovieHandler } from "../lib/config/youtube";
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

    const {
        data: relatedVideos,
        error: relatedVideosError,
        isError: relatedVideosIsError,
        isLoading: relatedVideosIsLoading,
    } = useQuery(
        ["relatedVideos", videoId],
        () => getRelatedVideos(videoId as string),
        {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            onError: (err: AxiosError) => err,
        }
    );

    console.log("data", data);
    console.log("relatedVideos", relatedVideos);

    const video = data?.data.items[0];

    if (isLoading) return <LoaderOverlay isLoading={isLoading} />;

    if (isError) return <div>{error?.message}</div>;

    return (
        <section className="pt-6 px-[104px] w-full flex gap-x-6">
            <div className="w-9/12">
                <VideoPlayer videoId={videoId} />

                <div>
                    <h1 className="text-xl font-bold mt-4">
                        {video.snippet.title}
                    </h1>
                </div>
            </div>

            {/* Recommended Videos */}
            {relatedVideosIsLoading ? (
                <LoaderOverlay isLoading={relatedVideosIsLoading} />
            ) : relatedVideosIsError ? (
                <div className="w-3/12 min-h-screen flex flex-col gap-y-3">
                    {relatedVideosError?.message}
                </div>
            ) : (
                <div className="w-3/12 min-h-screen flex flex-col gap-y-3">
                    {/* Horizontal Video Card */}
                    {relatedVideos?.data.items.map((video: any) => (
                        <VideoCard
                            key={video.id.videoId}
                            video={video}
                            variant="horizontal"
                        />
                    ))}
                </div>
            )}
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
