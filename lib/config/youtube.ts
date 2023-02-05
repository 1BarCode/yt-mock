import axios from "axios";

export const api_key = process.env.NEXT_PUBLIC_YT_API_KEY;

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

export const searchHandler = async (query: string) => {
    const response = await youtube.get("search", {
        params: {
            part: "snippet",
            key: api_key,
            // key: "abc",
            type: "video",
            maxResults: 15,
            q: query,
        },
    });

    return response.data;
};
