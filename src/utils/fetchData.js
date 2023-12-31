import axios from "axios";

export const exerciseOptions = {
    method: 'GET',
    params: { limit: '50' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_YOUTUBE_KEY,
    },
};


export const fetchData = async (url, options) => {
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
        // Handle error appropriately for your use case
        throw error;
    }
}