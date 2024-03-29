import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import {
    generateRandomNumber,
    replaceEscapeCharacters,
    truncateString,
} from "../../../lib/util";
import Button from "../../inputs/Button";

export type Props = {
    video: any;
};

const HorizontalVideoCard: React.FC<Props> = ({ video }) => {
    const randomViews = generateRandomNumber(100, 999);

    return (
        <div className="w-[402px] h-[94px] flex rounded-lg">
            <Link
                href={{
                    pathname: "/watch",
                    query: { v: video.id.videoId },
                }}
                className="flex"
            >
                <Image
                    src={
                        video.snippet.thumbnails.medium.url ||
                        video.snippet.thumbnails.default.url
                    }
                    alt="thumbnail"
                    width={168}
                    height={94}
                    className="rounded-lg"
                />

                <div className="flex flex-col gap-y-0.5 pl-2 w-full">
                    <div className="">
                        <span className="font-medium text-base">
                            {truncateString(
                                replaceEscapeCharacters(video.snippet.title),
                                40
                            )}
                        </span>
                    </div>

                    <div className="text-gray-400 text-[13px] flex flex-col leading-4">
                        <span>{video.snippet.channelTitle}</span>
                        <span>
                            {randomViews}K views •{" "}
                            {moment(video.snippet.publishedAt).fromNow()}
                        </span>
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

export default HorizontalVideoCard;
