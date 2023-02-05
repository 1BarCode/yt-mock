import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { FadeLoader } from "react-spinners";
import { searchHandler } from "../../../lib/config/youtube";
import Button from "../../inputs/Button";

export type Props = {};

const Trending: React.FC<Props> = () => {
    const {
        data,
        error,
        isError,
        isLoading,
        refetch: refetchTrending,
    } = useQuery(["trending"], () => searchHandler("trending"), {
        enabled: false,
        retry: false,
        onError: (err: AxiosError) => err,
    });
    console.log("data", data);

    if (isLoading) return <FadeLoader />;

    if (isError) return <div>{error.message}</div>;

    return (
        <div className="w-full">
            <Button onClick={() => refetchTrending()}>Fetch</Button>
            {/* Each row */}
            <div className="mx-4 flex flex-wrap">
                {data?.items.map((video: any) => (
                    <div className="w-3/12" key={video.id.videoId}>
                        {video.snippet.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
