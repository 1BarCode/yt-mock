import { useQuery } from "react-query";
import { searchHandler } from "../../../lib/config/youtube";
import Button from "../../inputs/Button";

export type Props = {};

const TrendingSuspense: React.FC<Props> = () => {
    const {
        data,
        error,
        isError,
        isLoading,
        refetch: refetchTrending,
    } = useQuery(["trending"], () => searchHandler("trending"), {
        useErrorBoundary: true,
        suspense: true,
        retry: false,
        // staleTime: 3000,
        // onError: (err: AxiosError) => err,
    });
    console.log("data", data);
    console.log("error", error);

    // if (isLoading) return <FadeLoader />;

    // if (isError) return <div>{error.message}</div>;

    return (
        <div className="w-full">
            <Button onClick={() => refetchTrending()}>Fetch</Button>
            {/* Each row */}
            <div className="mx-4 flex flex-wrap">
                {data?.data.items.map((video: any) => (
                    <div className="w-3/12" key={video.id.videoId}>
                        {video.snippet.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingSuspense;
