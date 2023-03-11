export type Props = {
    videoId: string | string[] | undefined;
};

const VideoPlayer: React.FC<Props> = ({ videoId }) => {
    return (
        <div
            className="relative block w-full h-0 m-auto overflow-hidden"
            style={{ paddingBottom: "56.25%" }}
        >
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default VideoPlayer;
