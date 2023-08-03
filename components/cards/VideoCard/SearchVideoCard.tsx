import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { replaceEscapeCharacters, truncateString } from "../../../lib/util";
import Button from "../../inputs/Button";

export type Props = {
    video: any;
};

const SearchVideoCard: React.FC<Props> = ({ video }) => {
    return (
        <div>
            <Link
                href={{
                    pathname: "/watch",
                    query: { v: video.id.videoId },
                }}
            >
                <div className="flex gap-x-2">
                    <Image
                        src={
                            video.snippet.thumbnails.medium.url ||
                            video.snippet.thumbnails.default.url
                        }
                        width={168}
                        height={94}
                        alt="thumbnail"
                        className="w-[168px] h-[94px] rounded-lg"
                    />

                    <div className="flex flex-col gap-y-0.5">
                        <div className="">
                            <span className="font-medium text-base">
                                {truncateString(
                                    replaceEscapeCharacters(
                                        video.snippet.title
                                    ),
                                    40
                                )}
                            </span>
                        </div>

                        <div className="text-gray-400 text-[13px] flex flex-col leading-4">
                            <span>{video.snippet.channelTitle}</span>
                            <span>
                                155K views •{" "}
                                {moment(video.snippet.publishedAt).fromNow()}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

            <Button
                className="flex justify-center items-center h-6 w-1 bg-inherit"
                rounded
            >
                <MoreVertRoundedIcon />
            </Button>
        </div>
    );
};

export default SearchVideoCard;
