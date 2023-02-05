import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { FadeLoader } from "react-spinners";
import { mockSearchHander } from "../../../lib/config/youtube";

export type Props = {
    selectedCategory: string;
};

const HomeRecommendation: React.FC<Props> = ({ selectedCategory }) => {
    const { data, error, isError, isLoading } = useQuery(
        ["homeRecommendation", selectedCategory],
        () => mockSearchHander(selectedCategory),
        {
            retry: false,
            refetchOnWindowFocus: false,
            onError: (err: AxiosError) => err,
        }
    );
    console.log("data", data);

    if (isLoading) return <FadeLoader loading={isLoading} color="#FFFFFF" />;

    if (isError) return <div>{error.message}</div>;

    return (
        <div className="w-full">
            {/* Each row */}
            <div className="mx-4 flex flex-wrap">
                {data?.data.items.map((video: any) => (
                    <div
                        className="w-3/12 border-white border-[1px]"
                        key={video.id.videoId}
                    >
                        {video.snippet.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeRecommendation;
