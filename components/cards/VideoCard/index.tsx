import HorizontalVideoCard from "./HorizontalVideoCard";
import SearchVideoCard from "./SearchVideoCard";
import VerticalVideoCard from "./VerticalVideoCard";

export type Props = {
    variant: "horizontal" | "vertical" | "search";
    video: any;
};

const VideoCard: React.FC<Props> = ({ variant, video }) => {
    const card = {
        horizontal: <HorizontalVideoCard video={video} />,
        vertical: <VerticalVideoCard video={video} />,
        search: <SearchVideoCard video={video} />,
    };

    return card[variant];
};

export default VideoCard;
