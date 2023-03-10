import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { searchHandler } from "../../../lib/config/youtube";
import VideoCard from "../../cards/VideoCard";
import LoaderOverlay from "../../utility/LoaderOverlay";

export type Props = {
    selectedCategory: string;
};

const HomeRecommendation: React.FC<Props> = ({ selectedCategory }) => {
    const { data, error, isError, isLoading } = useQuery(
        ["recommended", selectedCategory],
        () => searchHandler(selectedCategory),
        {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity, // 5 * (60 * 1000), // 5 min
            onError: (err: AxiosError) => err,
        }
    );
    console.log("data", data);

    if (isLoading) return <LoaderOverlay isLoading={isLoading} />;

    if (isError) return <div>{error.message}</div>;

    return (
        <div className="w-full">
            {/* Each row */}
            <div className="mx-4 flex flex-wrap justify-evenly">
                {data?.data.items.map((video: any) => (
                    <div className="w-[344px]" key={video.id.videoId}>
                        <VideoCard variant="vertical" video={video} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeRecommendation;
