import axios from "axios";


const MY_API_KEY = '37183357-4a88867391e1f957a87f7d888';
const BASE_URL = 'https://pixabay.com/api/';

    
export async function fetchArticles(searchQuery, page, perPage) {   
    const url = BASE_URL;
    const params = {
        key: MY_API_KEY,
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage,
    };

    const response = await axios.get(url, {params});
        return response.data;
};
