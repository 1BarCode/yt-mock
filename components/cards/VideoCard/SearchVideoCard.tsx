import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import {
    generateRandomNumber,
    replaceEscapeCharacters,
    truncateString,
} from "../../../lib/util";

export type Props = {
    video: any;
};

const SearchVideoCard: React.FC<Props> = ({ video }) => {
    const randomViews = generateRandomNumber(30, 999);
    return (
        <div className="w-[1096px]">
            <Link
                href={{
                    pathname: "/watch",
                    query: { v: video.id.videoId },
                }}
            >
                <div className="flex gap-x-4">
                    <Image
                        src={
                            video?.snippet?.thumbnails?.medium.url ||
                            video?.snippet?.thumbnails?.default.url
                        }
                        width={360}
                        height={202}
                        alt="thumbnail"
                        className="w-[360px] h-[202px] rounded-lg"
                    />

                    <div className="flex flex-col gap-y-0.5 w-full">
                        <div className="flex flex-col gap-y-0.5 h-[146px] w-[720px]">
                            <div className="">
                                <span className="font-medium text-base">
                                    {truncateString(
                                        replaceEscapeCharacters(
                                            video?.snippet?.title
                                        ),
                                        40
                                    )}
                                </span>
                                d
                            </div>

                            <div className="text-gray-400 text-[13px] flex flex-col leading-4">
                                <span>
                                    {randomViews}K views •{" "}
                                    {moment(
                                        video?.snippet?.publishedAt
                                    ).fromNow()}
                                </span>
                            </div>

                            <div className="py-3">
                                {/* Avatar Circle with Random Alphabet letter */}
                                <Link
                                    className="flex gap-x-2"
                                    href={{
                                        pathname: `/@${video?.snippet?.channelTitle
                                            ?.split(" ")
                                            .join("")}`,
                                    }}
                                >
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-[26px] h-[26px] rounded-full bg-gray-400 flex justify-center items-center">
                                            <span className="text-white text-[14px] font-medium">
                                                {
                                                    video?.snippet
                                                        ?.channelTitle[0]
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <span>{video?.snippet?.channelTitle}</span>
                                </Link>
                            </div>

                            <div className="mb-2">
                                {/* span with text font size 12 */}
                                <span className="text-gray-400 text-[12px]">
                                    {video?.snippet?.description}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {/* <Button
                className="flex justify-center items-center h-6 w-1 bg-inherit"
                rounded
            >
                <MoreVertRoundedIcon />
            </Button> */}
        </div>
    );
};

export default SearchVideoCard;
