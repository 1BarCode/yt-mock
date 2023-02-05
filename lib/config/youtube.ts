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
            // key: "abc",
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
