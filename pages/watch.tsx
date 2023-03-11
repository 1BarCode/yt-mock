import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import VideoCard from "../components/cards/VideoCard";
import VideoPlayer from "../components/display/VideoPlayer";
import Button from "../components/inputs/Button";
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
        <section className="w-full flex justify-center">
            <div className="max-w-[1754px] w-full flex justify-between">
                <div className="max-w-[1304px] w-full h-[744px] ml-6 pt-6 pr-6">
                    <VideoPlayer videoId={videoId} />

                    <div>
                        <h1 className="text-xl font-bold mt-4">
                            {video.snippet.title}
                        </h1>
                    </div>

                    <div className="w-full h-[54px] flex justify-between items-center">
                        <div className="w-1/2 h-[42px] mt-3 mr-3 flex items-center">
                            <div className="w-[194px]"></div>
                            <Button className="h-9 rounded-3xl bg-white text-black-900 hover:bg-white-light">
                                Subscribe
                            </Button>
                        </div>

                        <div className="w-1/2 h-full mt-3">2</div>
                    </div>
                </div>

                {/* Recommended Videos */}
                {relatedVideosIsLoading ? (
                    <LoaderOverlay isLoading={relatedVideosIsLoading} />
                ) : relatedVideosIsError ? (
                    <div className="w-[426px] min-h-screen flex flex-col pt-6 pr-6 gap-y-3">
                        {relatedVideosError?.message}
                    </div>
                ) : (
                    <div className="w-[426px] min-h-screen flex flex-col pt-6 pr-6 gap-y-3">
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
            </div>
        </section>
    );
};

Watch.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout drawer={false} backgroundColor="bg-black-900">
            {page}
        </PrimaryLayout>
    );
};

export default Watch;
