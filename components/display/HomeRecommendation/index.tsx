import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { searchHandler } from "../../../lib/config/youtube";
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
            staleTime: 5 * (60 * 1000), // 5 min
            onError: (err: AxiosError) => err,
        }
    );
    console.log("data", data);

    if (isLoading) return <LoaderOverlay isLoading={isLoading} />;

    if (isError) return <div>{error.message}</div>;

    return (
        <div className="w-full">
            {/* Each row */}
            <div className="mx-4 flex flex-wrap">
                {data?.data.items.map((video: any) => (
                    <div className="w-3/12" key={video.id.videoId}>
                        <div className="mx-2 mb-10">
                            <Link
                                className="flex flex-col gap-y-2"
                                href={{
                                    pathname: "/watch",
                                    query: { v: video.id.videoId },
                                }}
                            >
                                <div>
                                    <Image
                                        alt="thumbnail"
                                        src={
                                            video.snippet.thumbnails.medium.url
                                        }
                                        width={360}
                                        height={201}
                                        className="rounded-xl"
                                        priority
                                    />
                                </div>
                                <div className="flex gap-x-2">
                                    <div>
                                        <div>Ava</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>{video.snippet.title}</div>
                                        <span>
                                            {video.snippet.channelTitle}
                                        </span>
                                        <span>{video.snippet.publishedAt}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeRecommendation;
