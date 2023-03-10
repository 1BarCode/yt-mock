import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { replaceEscapeCharacters, truncateString } from "../../../lib/util";

export function generateColor(title: string) {
    const colors = [
        "bg-red",
        "bg-yellow-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-indigo-500",
        "bg-purple-500",
        "bg-pink-500",
    ];
    const index = title.charCodeAt(0) % colors.length;
    return colors[index];
}

export type Props = {
    video: any;
};

const VerticalVideoCard: React.FC<Props> = ({ video }) => {
    return (
        <div className="mx-2 mb-10">
            <Link
                className="flex flex-col gap-y-3"
                href={{
                    pathname: "/watch",
                    query: { v: video.id.videoId },
                }}
            >
                <div>
                    <Image
                        alt="thumbnail"
                        src={video.snippet.thumbnails.medium.url}
                        width={360}
                        height={201}
                        className="rounded-xl"
                        priority
                    />
                </div>
                <div className="flex w-full gap-x-4">
                    <div className="w-1/12">
                        <div
                            className={`flex justify-center items-center text-white w-9 h-9 rounded-full ${generateColor(
                                video.snippet.channelTitle
                            )}`}
                        >
                            {video.snippet.channelTitle[0]}
                        </div>
                    </div>
                    <div className="flex flex-col w-11/12 gap-y-1">
                        <div>
                            <span className="font-medium">
                                {truncateString(
                                    replaceEscapeCharacters(
                                        video.snippet.title
                                    ),
                                    65
                                )}
                            </span>
                        </div>

                        <div className="text-gray-400 text-sm flex flex-col">
                            <span>{video.snippet.channelTitle}</span>
                            <span>
                                175M views •{" "}
                                {moment(video.snippet.publishedAt).fromNow()}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default VerticalVideoCard;
