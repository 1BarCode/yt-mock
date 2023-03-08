export type Props = {
    videoId: string | string[] | undefined;
};

const VideoPlayer: React.FC<Props> = ({ videoId }) => {
    return (
        <div
            // iframe with full width that maintain 16:9 aspect ratio
            className="max-w-[1280px] relative"
            // style={{ paddingBottom: "56.25%" }}
            style={{ paddingBottom: "50.00%" }}
        >
            <iframe
                // iframe with 1280x720 resolution and maintain aspect ratio with tailwind
                // width="1280"
                // height="720"
                className="absolute w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPlayer;
