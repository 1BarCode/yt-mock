import axios from "axios";
import data from "../testData.json";

export const api_key = process.env.NEXT_PUBLIC_YT_API_KEY;

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

export const searchHandler = (query: string) => {
    return youtube.get("search", {
        params: {
            part: "snippet",
            key: api_key,
            type: "video",
            maxResults: 15,
            q: query,
        },
    });
};

export const mockSearchHander = (query: string): Promise<any> => {
    console.log(`fetching ${query}`);
    return new Promise((res) => {
        setTimeout(() => {
            res({ data });
        }, 300);
    });
};

export const searchMovieHandler = (videoId: string) => {
    return youtube.get("videos", {
        // get the video details including statistics and suggestions
        params: {
            part: "statistics,snippet",
            key: api_key,
            id: videoId,
        },
    });
};

export const mockSearchMovieHandler = (videoId: string): Promise<any> => {
    console.log(`fetching ${videoId}`);
    return new Promise((res) => {
        setTimeout(() => {
            res({ data });
        }, 300);
    });
};

export const getRelatedVideos = (videoId: string) => {
    return youtube.get("search", {
        params: {
            part: "snippet",
            key: api_key,
            relatedToVideoId: videoId,
            type: "video",
            maxResults: 15,
        },
    });
};

export const getVideoComments = (videoId: string) => {
    return youtube.get("commentThreads", {
        params: {
            part: "snippet",
            key: api_key,
            videoId,
            maxResults: 15,
        },
    });
};
